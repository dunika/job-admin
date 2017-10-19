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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2pvYnMvc3RvcmUvc2VsZWN0b3JzLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2tleXMiLCJyZXF1aXJlIiwiX2tleXMyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl92YWx1ZXMiLCJfdmFsdWVzMiIsIl90b0NvbnN1bWFibGVBcnJheTIiLCJfdG9Db25zdW1hYmxlQXJyYXkzIiwiX3NsaWNlZFRvQXJyYXkyIiwiX3NsaWNlZFRvQXJyYXkzIiwiX2VudHJpZXMiLCJfZW50cmllczIiLCJfcmVzZWxlY3QiLCJfbW9tZW50IiwiX21vbWVudDIiLCJfY29tcG9zZSIsIl9jb21wb3NlMiIsIl9sb3dlckNhc2UiLCJfbG93ZXJDYXNlMiIsIl91dGlscyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiZ2V0Sm9ic1N0YXRlIiwiX3JlZiIsImpvYnMiLCJnZXRJc0xvYWRpbmciLCJjcmVhdGVLZXllZERhdGFTZWxlY3RvciIsImdldEFjdGl2ZUZpbHRlcnMiLCJnZXRTZWxlY3RlZEpvYklkcyIsImdldERhdGEiLCJnZXRQb3N0ZWRGaWx0ZXIiLCJnZXRMb2NhdGlvbkZpbHRlciIsImdldFNlbGVjdGVkSm9iSWRzQXJyYXkiLCJjcmVhdGVTZWxlY3RvciIsInNlbGVjdGVkSm9iSWRzIiwicmVkdWNlIiwicmVzdWx0cyIsIl9yZWYyIiwiX3JlZjMiLCJrZXkiLCJjb25jYXQiLCJnZXRTZWxlY3RlZEpvYnMiLCJkYXRhIiwibWFwIiwiZ2V0Sm9icyIsInNvcnQiLCJhIiwiYiIsInV0YyIsImRhdGUiLCJkaWZmIiwiZmlsdGVyT3BlcmF0aW9uQnVpbGRlcnMiLCJwb3N0ZWQiLCJfcG9zdGVkIiwiZmlsdGVyIiwiX3JlZjQiLCJ1cmxzIiwibG9jYXRpb24iLCJfbG9jYXRpb24iLCJfcmVmNSIsImpvYkxvY2F0aW9uIiwiaW5jbHVkZXMiLCJnZXRGaWx0ZXJlZEpvYnMiLCJhY3RpdmVGaWx0ZXJzIiwiZmlsdGVyT3BlcmF0aW9ucyIsImZpbHRlcktleSIsIm9wZXJhdGlvbkJ1aWxkZXIiLCJvcGVyYXRpb25EYXRhIiwib3BlcmF0aW9uIiwiZmlsdGVySm9icyIsImFwcGx5IiwidW5kZWZpbmVkIiwicG9zdGVkRmlsdGVyIiwibG9jYXRpb25GaWx0ZXIiLCJpc0xvYWRpbmciLCJmaWx0ZXJlZEpvYnMiLCJzZWxlY3RlZEpvYnMiLCJzZWxlY3RlZEpvYklkc0FycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxPQUFBLEFBQU8sZUFBUCxBQUFzQixTQUF0QixBQUErQjtTQUEvQixBQUE2QyxBQUNwQztBQURvQyxBQUMzQzs7QUFHRixJQUFJLFFBQUosQUFBSSxBQUFROztBQUVaLElBQUksU0FBUyx1QkFBYixBQUFhLEFBQXVCOztBQUVwQyxJQUFJLFVBQUosQUFBSSxBQUFVOztBQUVkLElBQUksV0FBVyx1QkFBZixBQUFlLEFBQXVCOztBQUV0QyxJQUFJLHNCQUFKLEFBQUksQUFBc0I7O0FBRTFCLElBQUksc0JBQXNCLHVCQUExQixBQUEwQixBQUF1Qjs7QUFFakQsSUFBSSxrQkFBSixBQUFJLEFBQWtCOztBQUV0QixJQUFJLGtCQUFrQix1QkFBdEIsQUFBc0IsQUFBdUI7O0FBRTdDLElBQUksV0FBSixBQUFJLEFBQVc7O0FBRWYsSUFBSSxZQUFZLHVCQUFoQixBQUFnQixBQUF1Qjs7QUFFdkMsSUFBSSxZQUFKLEFBQUksQUFBWTs7QUFFaEIsSUFBSSxVQUFKLEFBQUksQUFBVTs7QUFFZCxJQUFJLFdBQVcsdUJBQWYsQUFBZSxBQUF1Qjs7QUFFdEMsSUFBSSxXQUFKLEFBQUksQUFBVzs7QUFFZixJQUFJLFlBQVksdUJBQWhCLEFBQWdCLEFBQXVCOztBQUV2QyxJQUFJLGFBQUosQUFBSSxBQUFhOztBQUVqQixJQUFJLGNBQWMsdUJBQWxCLEFBQWtCLEFBQXVCOztBQUV6QyxJQUFJLFNBQUosQUFBYTs7QUFFYixTQUFBLEFBQVMsdUJBQVQsQUFBZ0MsS0FBSyxBQUFFO1NBQU8s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