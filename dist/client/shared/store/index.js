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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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