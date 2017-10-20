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