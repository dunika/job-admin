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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L3NoYXJlZC9zdG9yZS9zYWdhLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX3JlZ2VuZXJhdG9yIiwicmVxdWlyZSIsIl9yZWdlbmVyYXRvcjIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiZGVmYXVsdCIsInJvb3RTYWdhIiwiX2VmZmVjdHMiLCJfaW5kZWVkIiwiX2pvYnMiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX21hcmtlZCIsIm1hcmsiLCJoYW5kbGVFcnJvcnMiLCJfcmVmIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJ3cmFwIiwicm9vdFNhZ2EkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInRha2VFdmVyeSIsIl9yZWYyIiwidHlwZSIsInRlc3QiLCJzYWdhcyIsIm1hcCIsInNhZ2EiLCJzdG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxPQUFBLEFBQU8sZUFBUCxBQUFzQixTQUF0QixBQUErQjtTQUEvQixBQUE2QyxBQUNwQztBQURvQyxBQUMzQzs7QUFHRixJQUFJLGVBQUosQUFBSSxBQUFlOztBQUVuQixJQUFJLGdCQUFnQix1QkFBcEIsQUFBb0IsQUFBdUI7O0FBRTNDLFFBQUEsQUFBUSxVQUFSLEFBQWtCOztBQUVsQixJQUFJLFdBQUosQUFBSSxBQUFXOztBQUVmLElBQUksVUFBSixBQUFjOztBQUVkLElBQUksUUFBSixBQUFZOztBQUVaLFNBQUEsQUFBUyx1QkFBVCxBQUFnQyxLQUFLLEFBQUU7U0FBTyxPQUFPLElBQVAsQUFBVyxhQUFYLEFBQXdCLE1BQU0sRUFBRSxTQUF2QyxBQUFxQyxBQUFXLEFBQVE7OztBQUUvRixJQUFJLFVBQVUsYUFBYSxjQUFBLEFBQWMsUUFBZCxBQUFzQixLQUFqRCxBQUEyQixBQUEyQjs7QUFFdEQsU0FBQSxBQUFTLGFBQVQsQUFBc0IsTUFBTSxBQUMxQjtNQUFJLFVBQVUsS0FBZCxBQUFtQixBQUVuQjs7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUNiOzs7QUFFRCxTQUFBLEFBQVMsV0FBVyxBQUNsQjt1QkFBTyxBQUFjLFFBQWQsQUFBc0IsS0FBSyxTQUFBLEFBQVMsVUFBVCxBQUFtQixVQUFVLEFBQzdEO1dBQUEsQUFBTyxHQUFHLEFBQ1I7Y0FBUSxTQUFBLEFBQVMsT0FBTyxTQUF4QixBQUFpQyxBQUMvQjthQUFBLEFBQUssQUFDSDttQkFBQSxBQUFTLE9BQVQsQUFBZ0IsQUFDaEI7bUJBQVMsR0FBRyxTQUFKLEFBQWEsV0FBVyxVQUFBLEFBQVUsT0FBTyxBQUMvQztnQkFBSSxPQUFPLE1BQVgsQUFBaUIsQUFDakI7QUFBUSxzQ0FBQSxBQUFrQixLQUExQixBQUFRLEFBQXVCLEFBRWhDOztBQUpPLFdBQUEsRUFBRCxBQUFDLEFBSUwscUJBQWUsQUFBTSxNQUFOLEFBQVksSUFBSSxVQUFBLEFBQVUsTUFBTSxBQUNoRDttQkFBQSxBQUFPLEFBQ1I7QUFOTSxBQUlXLFdBQUEsQ0FKWCxVQU1ILEFBQVEsTUFBUixBQUFjLElBQUksVUFBQSxBQUFVLE1BQU0sQUFDcEM7bUJBQUEsQUFBTyxBQUNSO0FBUkQsQUFBTyxBQU1ILEFBSU4sV0FKTTs7YUFJTixBQUFLLEFBQ0w7YUFBQSxBQUFLLEFBQ0g7aUJBQU8sU0FmWCxBQWVJLEFBQU8sQUFBUyxBQUVyQjs7QUFDRjtBQXBCTSxHQUFBLEVBQUEsQUFvQkosU0FwQkgsQUFBTyxBQW9CSyxBQUNiIiwiZmlsZSI6InNhZ2EuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdGsvcHJvamVjdHMvam9iLWFkbWluIn0=