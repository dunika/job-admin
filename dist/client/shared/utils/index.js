'use strict';

import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
import _Object$keys from 'babel-runtime/core-js/object/keys';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleArray = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _redux = require('./redux');

_Object$keys(_redux).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _redux[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggleArray = exports.toggleArray = function toggleArray(array, item) {
  var index = array.indexOf(item);
  if (index !== -1) {
    return [].concat((0, _toConsumableArray3.default)(array.slice(0, index)), (0, _toConsumableArray3.default)(array.slice(index + 1)));
  }
  return [].concat((0, _toConsumableArray3.default)(array), [item]);
};