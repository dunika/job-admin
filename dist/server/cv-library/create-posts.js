'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _database = require('../database');

var _isomorphic = require('../../isomorphic');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var jobs, results;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _database.models.Job.find({
              'urls.posted': null,
              source: 'cv-library'
            }, 'description urls.source location salary title').sort({ salary: -1, date: -1 });

          case 3:
            jobs = _context2.sent;
            _context2.next = 6;
            return _bluebird2.default.map(jobs, function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(job) {
                var _job$_doc, description, source, location, salary, title, response;

                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _job$_doc = job._doc, description = _job$_doc.description, source = _job$_doc.urls.source, location = _job$_doc.location, salary = _job$_doc.salary, title = _job$_doc.title; // eslint-disable-line

                        _context.prev = 1;
                        _context.next = 4;
                        return (0, _isomorphic.request)(_config2.default.createPost.url, {
                          formData: {
                            action: _config2.default.createPost.action,
                            description: description,
                            location: location,
                            locationId: location,
                            salary: salary,
                            title: title,
                            url: source
                          }
                        });

                      case 4:
                        response = _context.sent;

                        if (!response.url) {
                          _context.next = 11;
                          break;
                        }

                        console.log('Succesfully posted to ' + response.url);
                        job.urls.posted = response.url;
                        _context.next = 10;
                        return job.save();

                      case 10:
                        return _context.abrupt('return', { success: true });

                      case 11:
                        console.error('Failed to post - ' + response);
                        return _context.abrupt('return', { error: response });

                      case 15:
                        _context.prev = 15;
                        _context.t0 = _context['catch'](1);

                        console.error(_context.t0);
                        return _context.abrupt('return', { error: _context.t0 });

                      case 19:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined, [[1, 15]]);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }(), { concurrency: 1 });

          case 6:
            results = _context2.sent;


            console.log('Finished creating job posts');
            res.json({
              total: jobs.length,
              added: results.filter(function (_ref3) {
                var success = _ref3.success;
                return success;
              }).length,
              errors: results.filter(function (_ref4) {
                var error = _ref4.error;
                return error;
              }).length
            });
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](0);

            next(_context2.t0);

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 11]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();