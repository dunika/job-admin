import { Router } from 'express';
import request from 'request-promise';
import cheerio from 'cheerio';

function extractDescription(html) {
  const $ = cheerio.load(html);
  let element = null;
  let longest = 0;
  ['script', 'a', 'button', 'img', 'input', 'label', 'form', 'style', 'textarea', 'font', 'br'].forEach((selector) => {
    $(selector).remove();
  });

  $('body *').each(function each() {
    const pTags = $(this).children().find('p').length;
    if (pTags > longest) {
      longest = pTags;
      element = $(this);
    }
  });

  if (element) {
    return element
      .html()
      .replace(/<\/?t.+?>|<\/?di.+?>|<!--.+?-->/g, '') // remove table elements, divs and comment tags strings
      .replace(/(class|style|id)=".+?"/g, '') // remove class, style and id attribute
      .replace(/<span [^<]*<\/span>/g, '') // remove spans with no children
      .replace(/<span .+?>|<\/span>/g, '') // remove span tag strings
      .replace(/<[^/].><\/.+?>/g, '') // remove empty elements
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
    const text = $(this)
      .clone()
      .children()
      .remove()
      .end()
      .text();
    console.log(text);
    if (/€|\$|£/.test(text)) {
      salary = text.trim();
      return false;
    }
  });
  return salary;
}


export const api = () => {
  const apiRoutes = Router();
  apiRoutes.use('/scrape/salary', async (req, res, next) => {
    try {
      const html = await request(req.body.url);
      res.json({ salary: extractSalary(html) });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  apiRoutes.post('/scrape/description', async (req, res, next) => {
    try {
      const html = await request(req.body.url);
      res.json({ description: extractDescription(html) });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  return apiRoutes;
};
