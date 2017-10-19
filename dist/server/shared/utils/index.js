'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvePath = undefined;

var _path = require('path');

/* eslint-disable */
var resolvePath = exports.resolvePath = function resolvePath(path) {
  return (0, _path.resolve)(__dirname, path);
};
/* eslint-disable */