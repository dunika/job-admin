'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInsertManyResult = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
var getInsertManyResult = exports.getInsertManyResult = function getInsertManyResult(_ref, _ref2) {
  var length = _ref.length;
  var writeErrors = _ref2.writeErrors;


  // What the fuck am I doing and why cant I stop
  var getData = function getData(key, data, errmsg, isDuplicate, predicate) {
    return (0, _defineProperty3.default)({}, key, [].concat((0, _toConsumableArray3.default)(data), (0, _toConsumableArray3.default)(predicate && isDuplicate ? [errmsg] : [])));
  };

  var _writeErrors$reduce = writeErrors.reduce(function (_ref4, _ref5) {
    var errors = _ref4.errors,
        duplicates = _ref4.duplicates;
    var code = _ref5.code,
        errmsg = _ref5.errmsg;

    var isDuplicate = code === 11000;
    return (0, _extends3.default)({}, getData('errors', errors, errmsg, isDuplicate, false), getData('duplicates', duplicates, errmsg, isDuplicate, true));
  }, { errors: [], duplicates: [] }),
      errors = _writeErrors$reduce.errors,
      duplicates = _writeErrors$reduce.duplicates;

  return {
    added: length - writeErrors.length,
    duplicates: duplicates.length,
    errors: errors.length
  };
};
/* eslint-disable */