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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2pvYnMvc3RvcmUvc2FnYXMuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfcmVnZW5lcmF0b3IiLCJyZXF1aXJlIiwiX3JlZ2VuZXJhdG9yMiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfc3RyaW5naWZ5IiwiX3N0cmluZ2lmeTIiLCJfZWZmZWN0cyIsIl91dGlscyIsIl9pc29tb3JwaGljIiwiX3NlbGVjdG9ycyIsIl9zZWxlY3RvcnMyIiwiX2FjdGlvbnMiLCJfYWN0aW9uczIiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImFkZEN2TGlicmFyeUpvYnMiLCJjcmVhdGVBc3luY1NhZ2EiLCJyZXF1ZXN0IiwiZ2V0Sm9icyIsInF1ZXJ5U3RyaW5nIiwicXVlcnkiLCJzb3VyY2UiLCJmbGFnIiwiJG5lIiwiZGlzbWlzc0pvYnMiLCJwYXRjaCIsIm1hcmsiLCJfY2FsbGVlIiwiam9iSWRzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInNlbGVjdCIsInNlbGVjdGVkSm9iSWRzQXJyYXkiLCJzZW50IiwiYWJydXB0IiwibWFwIiwiaWQiLCJfaWQiLCJzdG9wIiwiYWRkSm9ic1RvV29yZHByZXNzIiwicG9zdCIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxPQUFBLEFBQU8sZUFBUCxBQUFzQixTQUF0QixBQUErQjtTQUEvQixBQUE2QyxBQUNwQztBQURvQyxBQUMzQzs7QUFHRixJQUFJLGVBQUosQUFBSSxBQUFlOztBQUVuQixJQUFJLGdCQUFnQix1QkFBcEIsQUFBb0IsQUFBdUI7O0FBRTNDLElBQUksYUFBSixBQUFJLEFBQWE7O0FBRWpCLElBQUksY0FBYyx1QkFBbEIsQUFBa0IsQUFBdUI7O0FBRXpDLElBQUksV0FBSixBQUFJLEFBQVc7O0FBRWYsSUFBSSxTQUFKLEFBQWE7O0FBRWIsSUFBSSxjQUFKLEFBQWtCOztBQUVsQixJQUFJLGFBQUosQUFBaUI7O0FBRWpCLElBQUksY0FBYyx1QkFBbEIsQUFBa0IsQUFBdUI7O0FBRXpDLElBQUksV0FBSixBQUFlOztBQUVmLElBQUksWUFBWSx1QkFBaEIsQUFBZ0IsQUFBdUI7O0FBRXZDLFNBQUEsQUFBUyx1QkFBVCxBQUFnQyxLQUFLLEFBQUU7U0FBTyxPQUFPLElBQVAsQUFBVyxhQUFYLEFBQXdCLE1BQU0sRUFBRSxTQUF2QyxBQUFxQyxBQUFXLEFBQVE7OztBQUUvRixJQUFJLG1CQUFtQixDQUFDLEdBQUcsT0FBSixBQUFXLGlCQUFpQixVQUFBLEFBQVUsUUFBdEMsQUFBOEMsa0JBQWtCLFlBQWhFLEFBQTRFLFNBQW5HLEFBQXVCLEFBQXFGOztBQUU1RyxJQUFJLFdBQVcsR0FBRyxPQUFKLEFBQVcsaUJBQWlCLFVBQUEsQUFBVSxRQUF0QyxBQUE4QyxTQUFTLFlBQXZELEFBQW1FLFVBQVMsQUFBQzs7WUFFL0UsR0FBRyxZQUFKLEFBQWdCO2NBQVMsQUFDdEIsQUFDUjtZQUFNLEVBQUUsS0FKZCxBQUFjLEFBQTRFLEFBQWEsQUFDeEYsQUFDSixBQUF5QixBQUV4QixBQUFPO0FBRmlCLEFBQzlCLEtBREs7QUFESSxBQUNYO0FBRm1HLEFBQ3JHLENBRHdGLENBQTVFOztBQVNkLElBQUksZUFBZSxHQUFHLE9BQUosQUFBVyxpQkFBaUIsVUFBQSxBQUFVLFFBQXRDLEFBQThDLGFBQWEsWUFBQSxBQUFZLFFBQXZFLEFBQStFLE9BQU8sMkJBQWEsQUFBYyxRQUFkLEFBQXNCLEtBQUssU0FBQSxBQUFTLFVBQVUsQUFDaks7TUFBQSxBQUFJLEFBQ0o7dUJBQU8sQUFBYyxRQUFkLEFBQXNCLEtBQUssU0FBQSxBQUFTLFNBQVQsQUFBa0IsVUFBVSxBQUM1RDtXQUFBLEFBQU8sR0FBRyxBQUNSO2NBQVEsU0FBQSxBQUFTLE9BQU8sU0FBeEIsQUFBaUMsQUFDL0I7YUFBQSxBQUFLLEFBQ0g7bUJBQUEsQUFBUyxPQUFULEFBQWdCLEFBQ2hCO2lCQUFPLENBQUMsR0FBRyxTQUFKLEFBQWEsUUFBUSxZQUFBLEFBQVksUUFBeEMsQUFBTyxBQUF5QyxBQUVsRDs7YUFBQSxBQUFLLEFBQ0g7bUJBQVMsU0FBVCxBQUFrQixBQUNsQjswQkFBTyxBQUFTLE9BQVQsQUFBZ0IsV0FBVSxBQUFDLGtCQUFXLEFBQU8sSUFBSSxVQUFBLEFBQVUsSUFBSSxBQUNwRTttQkFBTyxFQUFFLEtBQUYsQUFBTyxJQUFJLE1BQWxCLEFBQU8sQUFBaUIsQUFDekI7QUFGRCxBQUFPLEFBQTBCLEFBQVksQUFJL0MsV0FKK0MsQ0FBWixDQUExQjs7YUFJVCxBQUFLLEFBQ0w7YUFBQSxBQUFLLEFBQ0g7aUJBQU8sU0FiWCxBQWFJLEFBQU8sQUFBUyxBQUVyQjs7QUFDRjtBQWxCTSxHQUFBLEVBQUEsQUFrQkosU0FsQkgsQUFBTyxBQWtCSyxBQUNiO0FBckJELEFBQWtCLEFBQW1HLENBQUEsQ0FBbkc7O0FBdUJsQixJQUFJLHNCQUFzQixHQUFHLE9BQUosQUFBVyxpQkFBaUIsVUFBQSxBQUFVLFFBQXRDLEFBQThDLG9CQUFvQixZQUFBLEFBQVksUUFBOUUsQUFBc0YsTUFBTSwyQkFBYSxBQUFjLFFBQWQsQUFBc0IsS0FBSyxTQUFBLEFBQVMsV0FBVyxBQUMvSztNQUFBLEFBQUksQUFDSjt1QkFBTyxBQUFjLFFBQWQsQUFBc0IsS0FBSyxTQUFBLEFBQVMsVUFBVCxBQUFtQixXQUFXLEFBQzlEO1dBQUEsQUFBTyxHQUFHLEFBQ1I7Y0FBUSxVQUFBLEFBQVUsT0FBTyxVQUF6QixBQUFtQyxBQUNqQzthQUFBLEFBQUssQUFDSDtvQkFBQSxBQUFVLE9BQVYsQUFBaUIsQUFDakI7aUJBQU8sQ0FBQyxHQUFHLFNBQUosQUFBYSxRQUFRLFlBQUEsQUFBWSxRQUF4QyxBQUFPLEFBQXlDLEFBRWxEOzthQUFBLEFBQUssQUFDSDttQkFBUyxVQUFULEFBQW1CLEFBQ25CO2lCQUFPLFVBQUEsQUFBVSxPQUFWLEFBQWlCLFVBQVUsQ0FBQSxBQUFDLDRCQUFuQyxBQUFPLEFBQTJCLEFBQTZCLEFBRWpFOzthQUFBLEFBQUssQUFDTDthQUFBLEFBQUssQUFDSDtpQkFBTyxVQVhYLEFBV0ksQUFBTyxBQUFVLEFBRXRCOztBQUNGO0FBaEJNLEdBQUEsRUFBQSxBQWdCSixVQWhCSCxBQUFPLEFBZ0JNLEFBQ2Q7QUFuQkQsQUFBeUIsQUFBeUcsQ0FBQSxDQUF6Rzs7QUFxQnpCLFFBQUEsQUFBUSxVQUFVLENBQUEsQUFBQyxvQkFBRCxBQUFxQixTQUFyQixBQUE4QixhQUFoRCxBQUFrQixBQUEyQyIsImZpbGUiOiJzYWdhcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90ay9wcm9qZWN0cy9qb2ItYWRtaW4ifQ==