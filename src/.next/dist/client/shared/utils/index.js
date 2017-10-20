'use strict';

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault2(_keys);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleArray = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _redux = require('./redux');

(0, _keys2.default)(_redux).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  (0, _defineProperty2.default)(exports, key, {
    enumerable: true,
    get: function get() {
      return _redux[key];
    }
  });
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var toggleArray = exports.toggleArray = function toggleArray(array, item) {
  var index = array.indexOf(item);
  if (index !== -1) {
    return [].concat((0, _toConsumableArray3.default)(array.slice(0, index)), (0, _toConsumableArray3.default)(array.slice(index + 1)));
  }
  return [].concat((0, _toConsumableArray3.default)(array), [item]);
};