import { Router } from 'express';
import request from 'request-promise';
import cheerio from 'cheerio';

const getTextChildren = element =>
  element
    .clone()
    .children()
    .remove()
    .end()
    .text();

function extractDescription(html) {
  const $ = cheerio.load(html);
  let element = null;
  let mostPTagsongest = 0;
  ['script', 'a', 'button', 'img', 'input', 'label', 'form', 'style', 'textarea', 'font'].forEach((selector) => {
    $(selector).remove();
  });

  $('body *').each(function each() {
    const pTags = $(this).children().find('p').length;
    if (pTags > mostPTagsongest) {
      mostPTagsongest = pTags;
      element = $(this);
    }
  });

  if (!element) {
    let mostText = 0;
    $('body *').each(function each() {
      const textLength = getTextChildren($(this)).length;
      if (textLength > mostText) {
        mostText = textLength;
        element = $(this);
      }
    });
  }

  if (element) {
    return element
      .html()
      .replace(/Apply Now/i, '')
      .replace(/<\/?t.+?>|<\/?di.+?>|<!--.+?-->/g, '') // remove table elements, divs and comment tags strings
      .replace(/(class|style|id)=".+?"/g, '') // remove class, style and id attribute
      .replace(/<span [^<]*<\/span>/g, '') // remove spans with no children
      .replace(/<span .+?>|<\/span>/g, '') // remove span tag strings
      .replace(/<[^/].><\/.+?>/g, '') // remove empty elements
      .replace(/<[^/].>[^a-z0-9]<\/.+?>/g, '') // remove any tags without text or numbers between
      .replace(/<br\s*[/]?>/gi, '\n') // replace br tags with newline
      .replace(/\n\s*\n/g, '\n') // remove multi new lines
      .replace(/[^<]*/, '') // remove text at the start
      .replace(/[^>]*$/, '') // remove text at the start
      .trim();
  }

  return null;
}

function extractSalary(html) {
  const $ = cheerio.load(html);
  let salary = null;
  $('body *').each(function each() {
    const text = getTextChildren($(this));
    if (/€|\$|£/.test(text)) {
      salary = text.trim();
      return false;
    }
  });
  return salary;
}


export const api = () => {
  const apiRoutes = Router();
  apiRoutes.use('/scrape', async (req, res, next) => {
    try {
      const html = await request(req.body.url);
      const description = extractDescription(html);
      const salary = extractSalary(html);
      res.json({
        ...description && { description },
        ...salary && { salary },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  return apiRoutes;
};
