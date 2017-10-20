'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _reduxActions = require('redux-actions');

var _utils = require('../../shared/utils');

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
  data: null,
  error: null,
  isLoading: false
};
'ea926c2be8d4f250';
exports.default = (0, _reduxActions.handleActions)((0, _extends4.default)({}, (0, _utils.createAsyncLeaf)(_actions2.default.search, function (state, _ref) {
  var payload = _ref.payload;
  return {
    data: payload
  };
}), (0, _utils.createAsyncLeaf)(_actions2.default.addJobToWordpress, function (_ref2, _ref3) {
  var data = _ref2.data;
  var payload = _ref3.payload;
  return {
    data: (0, _extends4.default)({}, data, (0, _defineProperty3.default)({}, payload[0].sourceId, payload[0]))
  };
})), initialState);