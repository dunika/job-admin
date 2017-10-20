'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _reselect = require('reselect');

var _utils = require('../../shared/utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var getJobsState = function getJobsState(_ref) {
  var indeed = _ref.indeed;
  return indeed;
};

var getIsLoading = (0, _utils.createKeyedDataSelector)('isLoading', getJobsState);

var getData = (0, _utils.createKeyedDataSelector)('data', getJobsState);

var getJobs = (0, _reselect.createSelector)(getData, function (data) {
  return data ? (0, _values2.default)(data) : [];
});

exports.default = {
  jobs: getJobs,
  isLoading: getIsLoading
};