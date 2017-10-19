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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2luZGVlZC9zdG9yZS9zZWxlY3RvcnMuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfdmFsdWVzIiwicmVxdWlyZSIsIl92YWx1ZXMyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9yZXNlbGVjdCIsIl91dGlscyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiZ2V0Sm9ic1N0YXRlIiwiX3JlZiIsImluZGVlZCIsImdldElzTG9hZGluZyIsImNyZWF0ZUtleWVkRGF0YVNlbGVjdG9yIiwiZ2V0RGF0YSIsImdldEpvYnMiLCJjcmVhdGVTZWxlY3RvciIsImRhdGEiLCJqb2JzIiwiaXNMb2FkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxPQUFBLEFBQU8sZUFBUCxBQUFzQixTQUF0QixBQUErQjtTQUEvQixBQUE2QyxBQUNwQztBQURvQyxBQUMzQzs7QUFHRixJQUFJLFVBQUosQUFBSSxBQUFVOztBQUVkLElBQUksV0FBVyx1QkFBZixBQUFlLEFBQXVCOztBQUV0QyxJQUFJLFlBQUosQUFBSSxBQUFZOztBQUVoQixJQUFJLFNBQUosQUFBYTs7QUFFYixTQUFBLEFBQVMsdUJBQVQsQUFBZ0MsS0FBSyxBQUFFO1NBQU8sT0FBTyxJQUFQLEFBQVcsYUFBWCxBQUF3QixNQUFNLEVBQUUsU0FBdkMsQUFBcUMsQUFBVyxBQUFROzs7QUFFL0YsSUFBSSxlQUFlLFNBQUEsQUFBUyxhQUFULEFBQXNCLE1BQU0sQUFDN0M7TUFBSSxTQUFTLEtBQWIsQUFBa0IsQUFDbEI7U0FBQSxBQUFPLEFBQ1I7QUFIRDs7QUFLQSxJQUFJLGVBQWUsQ0FBQyxHQUFHLE9BQUosQUFBVyx5QkFBWCxBQUFvQyxhQUF2RCxBQUFtQixBQUFpRDs7QUFFcEUsSUFBSSxVQUFVLENBQUMsR0FBRyxPQUFKLEFBQVcseUJBQVgsQUFBb0MsUUFBbEQsQUFBYyxBQUE0Qzs7QUFFMUQsSUFBSSxXQUFXLEdBQUcsVUFBSixBQUFjLGdCQUFkLEFBQThCLFNBQVMsVUFBQSxBQUFVLE1BQU0sQUFDbkU7U0FBTyxPQUFPLENBQUMsR0FBRyxTQUFKLEFBQWEsU0FBcEIsQUFBTyxBQUFzQixRQUFwQyxBQUE0QyxBQUM3QztBQUZELEFBQWMsQ0FBQTs7QUFJZCxRQUFBLEFBQVE7UUFBVSxBQUNWLEFBQ047YUFGRixBQUFrQixBQUVMO0FBRkssQUFDaEIiLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RrL3Byb2plY3RzL2pvYi1hZG1pbiJ9