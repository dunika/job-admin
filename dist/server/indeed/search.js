'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _queryString = require('query-string');

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getIp = function getIp(req) {
  var xForwarded = req.headers['x-forwarded-for'];
  if (xForwarded) {
    return xForwarded.split(',')[0].join().trim();
  }
  return req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
};

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var _req$body, keywords, location, country, chnl, co, format, l, limit, publisher, q, sort, useragent, userip, v, query, url, data;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, keywords = _req$body.keywords, location = _req$body.location, country = _req$body.country;
            chnl = 'query-page';
            co = country || 'ie';
            format = 'json';
            l = location;
            limit = 25;
            publisher = '1835282825040035';
            q = keywords;
            sort = 'date';
            useragent = req.headers['user-agent'];
            userip = getIp(req);
            v = '2';
            query = (0, _queryString.stringify)({
              chnl: chnl,
              co: co,
              format: format,
              l: l,
              limit: limit,
              publisher: publisher,
              q: q,
              sort: sort,
              useragent: useragent,
              userip: userip,
              v: v
            });
            _context.prev = 13;

            console.log('http://api.indeed.com/ads/apisearch?' + query);
            url = 'http://api.indeed.com/ads/apisearch?' + query;
            _context.next = 18;
            return (0, _requestPromise2.default)({ url: url, json: true });

          case 18:
            data = _context.sent;

            res.json(data.results);
            return _context.abrupt('return');

          case 23:
            _context.prev = 23;
            _context.t0 = _context['catch'](13);

            next(_context.t0);

          case 26:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[13, 23]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();