'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = exports.regions = exports.isServer = exports.isDevelopment = undefined;

var _regions2 = require('./regions');

var _regions3 = _interopRequireDefault(_regions2);

var _request2 = require('./request');

var _request3 = _interopRequireDefault(_request2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var isDevelopment = exports.isDevelopment = process.env.NODE_ENV !== 'production';

var isServer = exports.isServer = typeof window === 'undefined';

exports.regions = _regions3.default;
exports.request = _request3.default;