'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends5 = require('babel-runtime/helpers/extends');

var _extends6 = _interopRequireDefault(_extends5);

var _extends4;

var _reduxActions = require('redux-actions');

var _utils = require('../../shared/utils');

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
  activeFilters: {
    posted: false,
    location: ''
  },
  data: null,
  selected: {},
  error: null,
  isLoading: false
};

exports.default = (0, _reduxActions.handleActions)((0, _extends6.default)({}, (0, _utils.createAsyncLeaf)(_actions2.default.getJobs, function (state, _ref) {
  var payload = _ref.payload;
  return {
    data: payload
  };
}), (0, _utils.createAsyncLeaf)(_actions2.default.addCvLibraryJobs, function (_ref2, _ref3) {
  var data = _ref2.data;
  var payload = _ref3.payload;
  return {
    data: (0, _extends6.default)({}, data, payload)
  };
}), (0, _utils.createAsyncLeaf)(_actions2.default.addJobsToWordpress, function (_ref4, _ref5) {
  var data = _ref4.data;
  var payload = _ref5.payload;
  return {
    data: (0, _extends6.default)({}, data, payload)
  };
}), (0, _utils.createAsyncLeaf)(_actions2.default.dismissJobs, function (_ref6, _ref7) {
  var data = _ref6.data;
  var payload = _ref7.payload;
  return {
    data: (0, _extends6.default)({}, (0, _keys2.default)(data).filter(function (id) {
      return !payload.includes(id);
    }).reduce(function (newData, item) {
      return (0, _extends6.default)({}, newData, (0, _defineProperty3.default)({}, item, data[item]));
    }, {}))
  };
}), (_extends4 = {}, (0, _defineProperty3.default)(_extends4, _actions2.default.toggleJob, function (state, _ref8) {
  var payload = _ref8.payload;
  return (0, _extends6.default)({}, state, {
    selected: (0, _extends6.default)({}, state.selected, (0, _defineProperty3.default)({}, payload, !state.selected[payload]))
  });
}), (0, _defineProperty3.default)(_extends4, _actions2.default.togglePostedFilter, function (state) {
  var activeFilters = state.activeFilters;

  return (0, _extends6.default)({}, state, {
    activeFilters: (0, _extends6.default)({}, activeFilters, {
      posted: !activeFilters.posted
    })
  });
}), (0, _defineProperty3.default)(_extends4, _actions2.default.setLocationFilter, function (state, _ref9) {
  var payload = _ref9.payload;
  var activeFilters = state.activeFilters;

  return (0, _extends6.default)({}, state, {
    activeFilters: (0, _extends6.default)({}, activeFilters, {
      location: payload
    })
  });
}), _extends4)), initialState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2pvYnMvc3RvcmUvcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJyZXF1aXJlIiwiX2RlZmluZVByb3BlcnR5MyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfa2V5cyIsIl9rZXlzMiIsIl9leHRlbmRzNSIsIl9leHRlbmRzNiIsIl9leHRlbmRzNCIsIl9yZWR1eEFjdGlvbnMiLCJfdXRpbHMiLCJfYWN0aW9ucyIsIl9hY3Rpb25zMiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiaW5pdGlhbFN0YXRlIiwiYWN0aXZlRmlsdGVycyIsInBvc3RlZCIsImxvY2F0aW9uIiwiZGF0YSIsInNlbGVjdGVkIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJoYW5kbGVBY3Rpb25zIiwiY3JlYXRlQXN5bmNMZWFmIiwiZ2V0Sm9icyIsInN0YXRlIiwiX3JlZiIsInBheWxvYWQiLCJhZGRDdkxpYnJhcnlKb2JzIiwiX3JlZjIiLCJfcmVmMyIsImFkZEpvYnNUb1dvcmRwcmVzcyIsIl9yZWY0IiwiX3JlZjUiLCJkaXNtaXNzSm9icyIsIl9yZWY2IiwiX3JlZjciLCJmaWx0ZXIiLCJpZCIsImluY2x1ZGVzIiwicmVkdWNlIiwibmV3RGF0YSIsIml0ZW0iLCJ0b2dnbGVKb2IiLCJfcmVmOCIsInRvZ2dsZVBvc3RlZEZpbHRlciIsInNldExvY2F0aW9uRmlsdGVyIiwiX3JlZjkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE9BQUEsQUFBTyxlQUFQLEFBQXNCLFNBQXRCLEFBQStCO1NBQS9CLEFBQTZDLEFBQ3BDO0FBRG9DLEFBQzNDOztBQUdGLElBQUksbUJBQUosQUFBSSxBQUFtQjs7QUFFdkIsSUFBSSxtQkFBbUIsdUJBQXZCLEFBQXVCLEFBQXVCOztBQUU5QyxJQUFJLFFBQUosQUFBSSxBQUFROztBQUVaLElBQUksU0FBUyx1QkFBYixB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