'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _database = require('../database');

var _postJobs = require('./postJobs');

var _postJobs2 = _interopRequireDefault(_postJobs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var api = (0, _express.Router)();

  api.use('/wordpress/post-jobs', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
      var jobs, postedJobs;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _database.models.Job.find({
                _id: {
                  $in: req.body
                },
                'urls.posted': null
              });

            case 3:
              jobs = _context.sent;
              _context.next = 6;
              return (0, _postJobs2.default)(jobs);

            case 6:
              postedJobs = _context.sent;


              console.log('Finished creating job posts');
              res.status(200).json([].concat((0, _toConsumableArray3.default)(postedJobs.filter(function (_ref2) {
                var error = _ref2.error;
                return !error;
              }))));
              return _context.abrupt('return');

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);

              next(_context.t0);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 12]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());

  api.use('/wordpress/post-job', function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
      var _req$body, description, location, salary, source, sourceId, title, sourceUrl, job, postedJobs;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, description = _req$body.description, location = _req$body.location, salary = _req$body.salary, source = _req$body.source, sourceId = _req$body.sourceId, title = _req$body.title, sourceUrl = _req$body.urls.source;
              job = new _database.models.Job({
                description: description,
                location: location,
                salary: salary,
                source: source,
                sourceId: sourceId,
                title: title,
                urls: { source: sourceUrl }
              });
              _context2.next = 5;
              return job.save();

            case 5:
              _context2.next = 7;
              return (0, _postJobs2.default)(job);

            case 7:
              postedJobs = _context2.sent;


              console.log('Finished creating job posts');
              res.status(200).json([].concat((0, _toConsumableArray3.default)(postedJobs.filter(function (_ref4) {
                var error = _ref4.error;
                return !error;
              }))));
              return _context2.abrupt('return');

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2['catch'](0);

              next(_context2.t0);

            case 16:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 13]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());

  return api;
};