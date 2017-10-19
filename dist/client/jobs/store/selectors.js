'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _reselect = require('reselect');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _compose = require('lodash/fp/compose');

var _compose2 = _interopRequireDefault(_compose);

var _lowerCase = require('lodash/fp/lowerCase');

var _lowerCase2 = _interopRequireDefault(_lowerCase);

var _utils = require('../../shared/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getJobsState = function getJobsState(_ref) {
  var jobs = _ref.jobs;
  return jobs;
};

var getIsLoading = (0, _utils.createKeyedDataSelector)('isLoading', getJobsState);

var getActiveFilters = (0, _utils.createKeyedDataSelector)('activeFilters', getJobsState);

var getSelectedJobIds = (0, _utils.createKeyedDataSelector)('selected', getJobsState);

var getData = (0, _utils.createKeyedDataSelector)('data', getJobsState);

var getPostedFilter = (0, _utils.createKeyedDataSelector)('posted', getActiveFilters);

var getLocationFilter = (0, _utils.createKeyedDataSelector)('location', getActiveFilters);

var getSelectedJobIdsArray = (0, _reselect.createSelector)(getSelectedJobIds, function (selectedJobIds) {
  return (0, _entries2.default)(selectedJobIds).reduce(function (results, _ref2) {
    var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return [].concat((0, _toConsumableArray3.default)(results), (0, _toConsumableArray3.default)(value ? [key] : []));
  }, []);
});

var getSelectedJobs = (0, _reselect.createSelector)(getData, getSelectedJobIdsArray, function (data, selectedJobIds) {
  return selectedJobIds.map(function (key) {
    return data[key];
  });
});

var getJobs = (0, _reselect.createSelector)(getData, function (data) {
  return data ? (0, _values2.default)(data).sort(function (a, b) {
    // eslint-disable-line arrow-body-style
    return _moment2.default.utc(a.date).diff(_moment2.default.utc(b.date));
  }) : [];
});

var filterOperationBuilders = {
  posted: function posted(_posted) {
    return function (jobs) {
      return !_posted ? jobs : jobs.filter(function (_ref4) {
        var posted = _ref4.urls.posted;
        return !!posted;
      });
    };
  },
  location: function location(_location) {
    return function (jobs) {
      if (!_location) {
        return jobs;
      }
      return jobs.filter(function (_ref5) {
        var jobLocation = _ref5.location;
        return (0, _lowerCase2.default)(jobLocation).includes((0, _lowerCase2.default)(_location));
      });
    };
  }
};

var getFilteredJobs = (0, _reselect.createSelector)(getJobs, getActiveFilters, function (jobs, activeFilters) {
  var filterOperations = (0, _keys2.default)(activeFilters).map(function (filterKey) {
    var operationBuilder = filterOperationBuilders[filterKey];
    var operationData = activeFilters[filterKey];
    var operation = operationBuilder(operationData);
    return operation;
  });
  var filterJobs = _compose2.default.apply(undefined, (0, _toConsumableArray3.default)(filterOperations));
  return filterJobs(jobs);
});

exports.default = {
  postedFilter: getPostedFilter,
  locationFilter: getLocationFilter,
  isLoading: getIsLoading,
  filteredJobs: getFilteredJobs,
  selectedJobs: getSelectedJobs,
  selectedJobIds: getSelectedJobIds,
  selectedJobIdsArray: getSelectedJobIdsArray
};