'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectReselect = exports.createKeyedDataSelector = exports.createAsyncLeaf = exports.createAsyncSaga = exports.createAsyncAction = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _reduxActions = require('redux-actions');

var _effects = require('redux-saga/effects');

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _marked = /*#__PURE__*/_regenerator2.default.mark(getArgs);

var createAsyncAction = exports.createAsyncAction = function createAsyncAction(name, payloadCreator) {
  var actionCreator = (0, _reduxActions.createAction)(name + '@ASYNC_REQUEST');
  actionCreator.failure = (0, _reduxActions.createAction)(name + '@ASYNC_FAILURE');
  actionCreator.success = (0, _reduxActions.createAction)(name + '@ASYNC_SUCCESS', payloadCreator);
  return actionCreator;
};

function getArgs(action, args) {
  var payload;
  return _regenerator2.default.wrap(function getArgs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(0, _isFunction2.default)(args)) {
            _context.next = 4;
            break;
          }

          _context.next = 3;
          return args(action);

        case 3:
          return _context.abrupt('return', _context.sent);

        case 4:
          if (!args) {
            _context.next = 6;
            break;
          }

          return _context.abrupt('return', Array.isArray(args) ? args : [args]);

        case 6:
          payload = action.payload;
          return _context.abrupt('return', payload ? [payload] : []);

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

var createAsyncSaga = exports.createAsyncSaga = function createAsyncSaga(actionCreator, asyncFunction, args) {
  var _marked2 = /*#__PURE__*/_regenerator2.default.mark(execute),
      _marked3 = /*#__PURE__*/_regenerator2.default.mark(wait);

  function execute(action) {
    var asyncArgs, data;
    return _regenerator2.default.wrap(function execute$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getArgs(action, args);

          case 2:
            asyncArgs = _context2.sent;
            _context2.prev = 3;
            _context2.next = 6;
            return _effects.call.apply(undefined, [asyncFunction].concat((0, _toConsumableArray3.default)(asyncArgs)));

          case 6:
            data = _context2.sent;
            _context2.next = 9;
            return (0, _effects.put)(actionCreator.success(data));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](3);
            _context2.next = 15;
            return (0, _effects.put)(actionCreator.failure(_context2.t0));

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _marked2, this, [[3, 11]]);
  }

  function wait() {
    return _regenerator2.default.wrap(function wait$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _effects.takeLatest)(actionCreator, execute);

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _marked3, this);
  }

  return wait;
};

var defaultSuccessHandler = function defaultSuccessHandler(state, _ref) {
  var payload = _ref.payload;
  return { data: payload };
};

var createAsyncLeaf = exports.createAsyncLeaf = function createAsyncLeaf(asyncAction) {
  var _ref3;

  var successHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSuccessHandler;
  return _ref3 = {}, (0, _defineProperty3.default)(_ref3, asyncAction, function (state) {
    return (0, _extends3.default)({}, state, { isLoading: true });
  }), (0, _defineProperty3.default)(_ref3, asyncAction.failure, function (state, _ref2) {
    var payload = _ref2.payload;
    return (0, _extends3.default)({}, state, {
      isLoading: false,
      error: payload
    });
  }), (0, _defineProperty3.default)(_ref3, asyncAction.success, function (state, action) {
    return (0, _extends3.default)({}, state, successHandler(state, action), {
      isLoading: false
    });
  }), _ref3;
};

var createKeyedDataSelector = exports.createKeyedDataSelector = function createKeyedDataSelector(key, getState) {
  return (0, _reselect.createSelector)(getState, function (state) {
    return state[key];
  });
};

var connectReselect = exports.connectReselect = function connectReselect(selectors) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return _reactRedux.connect.apply(undefined, [(0, _reselect.createStructuredSelector)(selectors)].concat(rest));
};