'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../shared/utils');

var _isomorphic = require('../../../isomorphic');

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var search = (0, _utils.createAsyncSaga)(_actions2.default.search, _isomorphic.request.post, function (_ref) {
  var payload = _ref.payload;
  //eslint-disable-line
  return ['/api/indeed/search', payload];
});

var addJobToWordpress = (0, _utils.createAsyncSaga)(_actions2.default.addJobToWordpress, _isomorphic.request.post, function (_ref2) {
  var payload = _ref2.payload;
  //eslint-disable-line
  return ['/api/wordpress/post-job', payload];
});

exports.default = [addJobToWordpress, search];