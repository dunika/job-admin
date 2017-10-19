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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizeJobs = function normalizeJobs(data) {
  return data.reduce(function (results, job) {
    return (0, _extends4.default)({}, results, (0, _defineProperty3.default)({}, job._id, job));
  }, {});
};

exports.default = {
  addJobsToWordpress: (0, _utils.createAsyncAction)('ADD_JOBS_TO_WORDPRESS', normalizeJobs),
  addCvLibraryJobs: (0, _utils.createAsyncAction)('ADD_CVLIBRARY_JOB', normalizeJobs),
  dismissJobs: (0, _utils.createAsyncAction)('DISMISS_JOBS'),
  getJobs: (0, _utils.createAsyncAction)('GET_JOBS', normalizeJobs),
  toggleJob: (0, _reduxActions.createAction)('TOGGLE_JOB'),
  togglePostedFilter: (0, _reduxActions.createAction)('TOGGLE_POSTED_FILTER'), // TODO Name this isPosed
  setLocationFilter: (0, _reduxActions.createAction)('SET_LOCATION_FILTER')
};