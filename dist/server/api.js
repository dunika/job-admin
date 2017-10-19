'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _job = require('./job');

var _wordpress = require('./wordpress');

var _cvLibrary = require('./cv-library');

var _indeed = require('./indeed');

exports.default = function () {
  var api = (0, _express.Router)();

  api.use('/', (0, _job.api)());
  api.use('/', (0, _indeed.api)());
  api.use('/', (0, _cvLibrary.api)());
  api.use('/', (0, _wordpress.api)());

  api.use(function (error, req, res, next) {
    console.log(error);
    var message = error.message || error;
    console.error('Error: ' + message);
    res.status(500).json({ error: message });
  });
  return api;
};