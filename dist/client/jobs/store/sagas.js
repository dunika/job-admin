'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _effects = require('redux-saga/effects');

var _utils = require('../../shared/utils');

var _isomorphic = require('../../../isomorphic');

var _selectors = require('./selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addCvLibraryJobs = (0, _utils.createAsyncSaga)(_actions2.default.addCvLibraryJobs, _isomorphic.request, '/api/cv-library/add-jobs');

var getJobs = (0, _utils.createAsyncSaga)(_actions2.default.getJobs, _isomorphic.request, ['/api/job', {
  queryString: {
    query: (0, _stringify2.default)({
      source: 'cv-library',
      flag: { $ne: 'dismissed' }
    })
  }
}]);

var dismissJobs = (0, _utils.createAsyncSaga)(_actions2.default.dismissJobs, _isomorphic.request.patch, /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var jobIds;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(_selectors2.default.selectedJobIdsArray);

        case 2:
          jobIds = _context.sent;
          return _context.abrupt('return', ['api/job', jobIds.map(function (id) {
            return { _id: id, flag: 'dismissed' };
          })]);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

var addJobsToWordpress = (0, _utils.createAsyncSaga)(_actions2.default.addJobsToWordpress, _isomorphic.request.post, /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
  var jobIds;
  return _regenerator2.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.select)(_selectors2.default.selectedJobIdsArray);

        case 2:
          jobIds = _context2.sent;
          return _context2.abrupt('return', ['/api/wordpress/post-jobs', jobIds]);

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));

exports.default = [addJobsToWordpress, getJobs, dismissJobs, addCvLibraryJobs];