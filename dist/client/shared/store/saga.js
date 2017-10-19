'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = rootSaga;

var _effects = require('redux-saga/effects');

var _indeed = require('../../indeed');

var _jobs = require('../../jobs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

function handleErrors(_ref) {
  var payload = _ref.payload;

  console.log(payload);
}

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [(0, _effects.takeEvery)(function (_ref2) {
            var type = _ref2.type;
            return (/@ASYNC_FAILURE/i.test(type)
            );
          }, handleErrors), _jobs.sagas.map(function (saga) {
            return saga();
          }), _indeed.sagas.map(function (saga) {
            return saga();
          })];

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}