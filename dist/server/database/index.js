'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.models = exports.initialize = exports.getInsertManyResult = undefined;

var _initialize = require('./initialize');

var _initialize2 = _interopRequireDefault(_initialize);

var _Job = require('./Job');

var _Job2 = _interopRequireDefault(_Job);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var models = {
  Job: _Job2.default
};

exports.getInsertManyResult = _utils.getInsertManyResult;
exports.initialize = _initialize2.default;
exports.models = models;