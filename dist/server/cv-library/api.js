'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _createPosts = require('./create-posts');

var _createPosts2 = _interopRequireDefault(_createPosts);

var _addJobs = require('./add-jobs');

var _addJobs2 = _interopRequireDefault(_addJobs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var routes = (0, _express.Router)();
  routes.use('/cv-library/create-posts', _createPosts2.default);
  routes.use('/cv-library/add-jobs', _addJobs2.default);
  return routes;
};