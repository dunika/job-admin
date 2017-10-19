'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;
exports.withReduxSaga = withReduxSaga;

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _nextReduxSaga = require('next-redux-saga');

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxLogger = require('redux-logger');

var _isomorphic = require('../../../isomorphic');

var _jobs = require('../../jobs');

var _indeed = require('../../indeed');

var _saga = require('./saga');

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var reducer = (0, _redux.combineReducers)({
  indeed: _indeed.reducer,
  jobs: _jobs.reducer
});

var sagaMiddleware = (0, _reduxSaga2.default)();

var loggerMiddleware = (0, _reduxLogger.createLogger)({
  collapsed: true,
  duration: true,
  predicate: function predicate() {
    return _isomorphic.isDevelopment && !_isomorphic.isServer;
  }
});

var middleware = [sagaMiddleware, loggerMiddleware];

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var store = (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, middleware)));

  store.sagaTask = sagaMiddleware.run(_saga2.default);
  return store;
}

function withReduxSaga(Component) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return _nextReduxWrapper2.default.apply(undefined, [configureStore].concat(rest))((0, _nextReduxSaga2.default)(Component));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L3NoYXJlZC9zdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNvbmZpZ3VyZVN0b3JlIiwid2l0aFJlZHV4U2FnYSIsIl9yZWR1eFNhZ2EiLCJyZXF1aXJlIiwiX3JlZHV4U2FnYTIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX25leHRSZWR1eFNhZ2EiLCJfbmV4dFJlZHV4U2FnYTIiLCJfbmV4dFJlZHV4V3JhcHBlciIsIl9uZXh0UmVkdXhXcmFwcGVyMiIsIl9yZWR1eCIsIl9yZWR1eERldnRvb2xzRXh0ZW5zaW9uIiwiX3JlZHV4TG9nZ2VyIiwiX2lzb21vcnBoaWMiLCJfam9icyIsIl9pbmRlZWQiLCJfc2FnYSIsIl9zYWdhMiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGVlZCIsImpvYnMiLCJzYWdhTWlkZGxld2FyZSIsImxvZ2dlck1pZGRsZXdhcmUiLCJjcmVhdGVMb2dnZXIiLCJjb2xsYXBzZWQiLCJkdXJhdGlvbiIsInByZWRpY2F0ZSIsImlzRGV2ZWxvcG1lbnQiLCJpc1NlcnZlciIsIm1pZGRsZXdhcmUiLCJpbml0aWFsU3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImFwcGx5Iiwic2FnYVRhc2siLCJydW4iLCJDb21wb25lbnQiLCJfbGVuIiwicmVzdCIsIkFycmF5IiwiX2tleSIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsT0FBQSxBQUFPLGVBQVAsQUFBc0IsU0FBdEIsQUFBK0I7U0FBL0IsQUFBNkMsQUFDcEM7QUFEb0MsQUFDM0M7QUFFRixRQUFBLEFBQVEsaUJBQVIsQUFBeUI7QUFDekIsUUFBQSxBQUFRLGdCQUFSLEFBQXdCOztBQUV4QixJQUFJLGFBQUosQUFBSSxBQUFhOztBQUVqQixJQUFJLGNBQWMsdUJBQWxCLEFBQWtCLEFBQXVCOztBQUV6QyxJQUFJLGlCQUFKLEFBQUksQUFBaUI7O0FBRXJCLElBQUksa0JBQWtCLHVCQUF0QixBQUFzQixBQUF1Qjs7QUFFN0MsSUFBSSxvQkFBSixBQUFJLEFBQW9COztBQUV4QixJQUFJLHFCQUFxQix1QkFBekIsQUFBeUIsQUFBdUI7O0FBRWhELElBQUksU0FBSixBQUFJLEFBQVM7O0FBRWIsSUFBSSwwQkFBSixBQUFJLEFBQTBCOztBQUU5QixJQUFJLGVBQUosQUFBSSxBQUFlOztBQUVuQixJQUFJLGNBQUosQUFBa0I7O0FBRWxCLElBQUksUUFBSixBQUFZOztBQUVaLElBQUksVUFBSixBQUFjOztBQUVkLElBQUksUUFBSixBQUFZOztBQUVaLElBQUksU0FBUyx1QkFBYixBQUFhLEFBQXVCOztBQUVwQyxTQUFBLEFBQVMsdUJBQVQsQUFBZ0MsS0FBSyxBQUFFO1NBQU8sT0FBTyxJQUFQLEFBQVcsYUFBWCxBQUF3QixNQUFNLEVBQUUsU0FBdkMsQUFBcUMsQUFBVyxBQUFROzs7QUFFL0YsSUFBSSxXQUFXLEdBQUcsT0FBSixBQUFXO1VBQ2YsUUFEZ0MsQUFDeEIsQUFDaEI7UUFBTSxNQUZSLEFBQWMsQUFBNEIsQUFFNUI7QUFGNEIsQUFDeEMsQ0FEWTs7QUFLZCxJQUFJLGlCQUFpQixDQUFDLEdBQUcsWUFBekIsQUFBcUIsQUFBZ0I7O0FBRXJDLElBQUksb0JBQW9CLEdBQUcsYUFBSixBQUFpQjthQUFjLEFBQ3pDLEFBQ1g7WUFGb0QsQUFFMUMsQUFDVjthQUFXLFNBQUEsQUFBUyxZQUFZLEFBQzlCO1dBQU8sWUFBQSxBQUFZLGlCQUFpQixDQUFDLFlBQXJDLEFBQWlELEFBQ2xEO0FBTEgsQUFBdUIsQUFBK0I7QUFBQSxBQUNwRCxDQURxQjs7QUFRdkIsSUFBSSxhQUFhLENBQUEsQUFBQyxnQkFBbEIsQUFBaUIsQUFBaUI7O0FBRWxDLFNBQUEsQUFBUyxpQkFBaUIsQUFDeEI7TUFBSSxlQUFlLFVBQUEsQUFBVSxTQUFWLEFBQW1CLEtBQUssVUFBQSxBQUFVLE9BQWxDLEFBQXlDLFlBQVksVUFBckQsQUFBcUQsQUFBVSxLQUFsRixBQUF1RixBQUV2Rjs7TUFBSSxRQUFRLENBQUMsR0FBRyxPQUFKLEFBQVcsYUFBWCxBQUF3QixTQUF4QixBQUFpQyxjQUFjLENBQUMsR0FBRyx3QkFBSixBQUE0QixxQkFBcUIsT0FBQSxBQUFPLGdCQUFQLEFBQXVCLE1BQXZCLEFBQTZCLFdBQXpJLEFBQVksQUFBK0MsQUFBaUQsQUFBd0MsQUFFcEo7O1FBQUEsQUFBTSxXQUFXLGVBQUEsQUFBZSxJQUFJLE9BQXBDLEFBQWlCLEFBQTBCLEFBQzNDO1NBQUEsQUFBTyxBQUNSOzs7QUFFRCxTQUFBLEFBQVMsY0FBVCxBQUF1QixXQUFXLEFBQ2hDO09BQUssSUFBSSxPQUFPLFVBQVgsQUFBcUIsUUFBUSxPQUFPLE1BQU0sT0FBQSxBQUFPLElBQUksT0FBWCxBQUFrQixJQUE1RCxBQUFvQyxBQUE0QixJQUFJLE9BQXpFLEFBQWdGLEdBQUcsT0FBbkYsQUFBMEYsTUFBMUYsQUFBZ0csUUFBUSxBQUN0RztTQUFLLE9BQUwsQUFBWSxLQUFLLFVBQWpCLEFBQWlCLEFBQVUsQUFDNUI7QUFFRDs7U0FBTyxtQkFBQSxBQUFtQixRQUFuQixBQUEyQixNQUEzQixBQUFpQyxXQUFXLENBQUEsQUFBQyxnQkFBRCxBQUFpQixPQUE3RCxBQUE0QyxBQUF3QixPQUFPLENBQUMsR0FBRyxnQkFBSixBQUFvQixTQUF0RyxBQUFPLEFBQTJFLEFBQTZCLEFBQ2hIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RrL3Byb2plY3RzL2pvYi1hZG1pbiJ9