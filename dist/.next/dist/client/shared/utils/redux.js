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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L3NoYXJlZC91dGlscy9yZWR1eC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNvbm5lY3RSZXNlbGVjdCIsImNyZWF0ZUtleWVkRGF0YVNlbGVjdG9yIiwiY3JlYXRlQXN5bmNMZWFmIiwiY3JlYXRlQXN5bmNTYWdhIiwiY3JlYXRlQXN5bmNBY3Rpb24iLCJ1bmRlZmluZWQiLCJfZGVmaW5lUHJvcGVydHkyIiwicmVxdWlyZSIsIl9kZWZpbmVQcm9wZXJ0eTMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2V4dGVuZHMyIiwiX2V4dGVuZHMzIiwiX3RvQ29uc3VtYWJsZUFycmF5MiIsIl90b0NvbnN1bWFibGVBcnJheTMiLCJfcmVnZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3IyIiwiX3JlYWN0UmVkdXgiLCJfcmVzZWxlY3QiLCJfcmVkdXhBY3Rpb25zIiwiX2VmZmVjdHMiLCJfaXNGdW5jdGlvbiIsIl9pc0Z1bmN0aW9uMiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX21hcmtlZCIsIm1hcmsiLCJnZXRBcmdzIiwibmFtZSIsInBheWxvYWRDcmVhdG9yIiwiYWN0aW9uQ3JlYXRvciIsImNyZWF0ZUFjdGlvbiIsImZhaWx1cmUiLCJzdWNjZXNzIiwiYWN0aW9uIiwiYXJncyIsInBheWxvYWQiLCJ3cmFwIiwiZ2V0QXJncyQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiYWJydXB0Iiwic2VudCIsIkFycmF5IiwiaXNBcnJheSIsInN0b3AiLCJhc3luY0Z1bmN0aW9uIiwiX21hcmtlZDIiLCJleGVjdXRlIiwiX21hcmtlZDMiLCJ3YWl0IiwiYXN5bmNBcmdzIiwiZGF0YSIsImV4ZWN1dGUkIiwiX2NvbnRleHQyIiwiY2FsbCIsImFwcGx5IiwiY29uY2F0IiwicHV0IiwidDAiLCJ3YWl0JCIsIl9jb250ZXh0MyIsInRha2VMYXRlc3QiLCJkZWZhdWx0U3VjY2Vzc0hhbmRsZXIiLCJzdGF0ZSIsIl9yZWYiLCJhc3luY0FjdGlvbiIsIl9yZWYzIiwic3VjY2Vzc0hhbmRsZXIiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpc0xvYWRpbmciLCJfcmVmMiIsImVycm9yIiwia2V5IiwiZ2V0U3RhdGUiLCJjcmVhdGVTZWxlY3RvciIsInNlbGVjdG9ycyIsIl9sZW4iLCJyZXN0IiwiX2tleSIsImNvbm5lY3QiLCJjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE9BQUEsQUFBTyxlQUFQLEFBQXNCLFNBQXRCLEFBQStCO1NBQS9CLEFBQTZDLEFBQ3BDO0FBRG9DLEFBQzNDO0FBRUYsUUFBQSxBQUFRLGtCQUFrQixRQUFBLEFBQVEsMEJBQTBCLFFBQUEsQUFBUSxrQkFBa0IsUUFBQSxBQUFRLGtCQUFrQixRQUFBLEFBQVEsb0JBQXhILEFBQTRJOztBQUU1SSxJQUFJLG1CQUFKLEFBQUksQUFBbUI7O0FBRXZCLElBQUksbUJBQW1CLHVCQUF2QixBQUF1QixBQUF1Qjs7QUFFOUMsSUFBSSxZQUFKLEFBQUksQUFBWTs7QUFFaEIsSUFBSSxZQUFZLHVCQUFoQixBQUFnQixBQUF1Qjs7QUFFdkMsSUFBSSxzQkFBSixBQUFJLEFBQXNCOztBQUUxQixJQUFJLHNCQUFzQix1QkFBMUIsQUFBMEIsQUFBdUI7O0FBRWpELElBQUksZUFBSixBQUFJLEFBQWU7O0FBRW5CLElBQUksZ0JBQWdCLHVCQUFwQixBQUFvQixBQUF1Qjs7QUFFM0MsSUFBSSxjQUFKLEFBQUksQUFBYzs7QUFFbEIsSUFBSSxZQUFKLEFBQUksQUFBWTs7QUFFaEIsSUFBSSxnQkFBSixBQUFJLEFBQWdCOztBQUVwQixJQUFJLFdBQUosQUFBSSxBQUFXOztBQUVmLElBQUksY0FBSixBQUFJLEFBQWM7O0FBRWxCLElBQUksZUFBZSx1QkFBbkIsQUFBbUIsQUFBdUI7O0FBRTFDLFNBQUEsQUFBUyx1QkFBVCxBQUFnQyxLQUFLLEFBQUU7U0FBTyxPQUFPLElBQVAsQUFBVyxhQUFYLEFB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