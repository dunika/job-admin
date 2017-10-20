'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _indeed = require('../client/indeed');

var _store = require('../client/shared/store');

var _layout = require('./layout');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Indeed = function Indeed() {
  return _react2.default.createElement(_layout.Main, null, _react2.default.createElement(_indeed.Search, null));
};

exports.default = (0, _store.withReduxSaga)(Indeed);