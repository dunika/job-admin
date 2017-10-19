'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _isomorphic = require('../../isomorphic');

var _Job = require('./Job');

var _Job2 = _interopRequireDefault(_Job);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

_mongoose2.default.Promise = _promise2.default;

exports.default = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mongoose2.default.connect(_config2.default.database, {
            config: { autoIndex: !_isomorphic.isDevelopment }
          });

        case 3:
          console.log('Connected to database');
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context['catch'](0);
          throw new Error(_context.t0);

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined, [[0, 6]]);
}));


_mongoose2.default.connection.on('disconnected', function () {
  console.log('The connection to the database has been disconnected');
});