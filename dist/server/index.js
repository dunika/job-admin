'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _next = require('next');

var _next2 = _interopRequireDefault(_next);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _isomorphic = require('../isomorphic');

var _database = require('./database');

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _next2.default)({
  dir: (0, _path.resolve)(__dirname, '../'),
  dev: _isomorphic.isDevelopment
});

var server = (0, _express2.default)();

server.use((0, _morgan2.default)(_isomorphic.isDevelopment ? 'dev' : 'combined', {
  skip: function skip(req) {
    return req.url.includes('_next');
  }
}));
server.use(_bodyParser2.default.json());
server.use((0, _compression2.default)());
server.use('/api', (0, _api2.default)());
server.use(_routes2.default.getRequestHandler(app));

var listen = function listen(server, port) {
  return new _promise2.default(function (resolve, reject) {
    // eslint-disable-line
    var listener = server.listen(port, function (error) {
      if (error) reject(error);
      resolve(listener);
    });
  });
};

var initialize = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var listener;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.initialize)();

          case 3:
            _context.next = 5;
            return app.prepare();

          case 5:
            _context.next = 7;
            return listen(server, process.env.PORT || 3000);

          case 7:
            listener = _context.sent;

            console.log('Server started on port ' + listener.address().port);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 11]]);
  }));

  return function initialize() {
    return _ref.apply(this, arguments);
  };
}();

initialize();