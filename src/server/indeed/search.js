import { stringify } from 'query-string';
import request from 'request-promise';

const getIp = (req) => {
  const xForwarded = req.headers['x-forwarded-for'];
  if (xForwarded) {
    return xForwarded.split(',')[0].join().trim();
  }
  return req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};

export default async (req, res, next) => {
  const { keywords, location, country } = req.body;

  const chnl = 'query-page';
  const co = country || 'ie';
  const format = 'json';
  const l = location;
  const limit = 25;
  const publisher = '1835282825040035';
  const q = keywords;
  const sort = 'date';
  const useragent = req.headers['user-agent'];
  const userip = getIp(req);
  const v = '2';

  const query = stringify({
    chnl,
    co,
    format,
    l,
    limit,
    publisher,
    q,
    sort,
    useragent,
    userip,
    v,
  });

  try {
    console.log(`http://api.indeed.com/ads/apisearch?${query}`);
    const url = `http://api.indeed.com/ads/apisearch?${query}`;
    const data = await request({ url, json: true });
    res.json(data.results);
    return;
  } catch (error) {
    next(error);
  }
};
