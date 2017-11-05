import { URL } from 'url';

import { stringify } from 'query-string';
import scrape from 'paginated-listings-scraper';

const baseContryUrls = {
  ie: 'https://ie.indeed.com/jobs',
  gb: 'https://www.indeed.co.uk',
};

export default async (req, res, next) => {
  const { keywords, location, country = 'ie', sortByDate } = req.body;

  const baseUrl = baseContryUrls[country || 'ie'];
  const query = stringify({
    l: location,
    q: keywords || '',
    ...!sortByDate && { sort: 'date' },
  });

  const url = `${baseUrl}?${query}`;

  try {
    const data = await scrape({
      maximiumDepth: 2,
      parentSelector: '.row.result',
      dataSelector: (parent, $) => {
        const isSponsored = parent.text().includes('Sponsored');
        const titleSelector = isSponsored ? '.jobtitle' : '.jobtitle a';

        const { origin } = new URL(baseUrl);
        const link = `${origin}${parent.find($(titleSelector)).attr('href')}`;
        const dataSelectors = {
          company: '.company',
          date: '.result-link-bar .date',
          location: '.location',
          salary: '.snip span.no-wrap',
          description: '.summary',
          title: titleSelector,
        };
        return {
          link,
          ...Object.entries(dataSelectors).reduce((results, [name, selector]) => ({
            ...results,
            [name]: parent.find($(selector)).text().trim() || null,
          }), {}),
        };
      },
      url,
      nextPageSelector(origin, $) {
        return `${origin}${$('.pagination').children().last().attr('href')}`;
      },
    });

    res.json(data);
    return;
  } catch (error) {
    next(error);
  }
};
