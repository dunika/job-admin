'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _config = require('../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postJobs = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(jobs) {
    var postedJobs;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _bluebird2.default.map(Array.isArray(jobs) ? jobs : [jobs], function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(job) {
                var _job$_doc, description, source, location, salary, title, response, addedJob;

                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _job$_doc = job._doc, description = _job$_doc.description, source = _job$_doc.urls.source, location = _job$_doc.location, salary = _job$_doc.salary, title = _job$_doc.title;
                        _context.prev = 1;
                        _context.next = 4;
                        return _requestPromise2.default.post({
                          url: _config.createPost.url,
                          json: true,
                          formData: (0, _extends3.default)({
                            action: _config.createPost.action,
                            description: description,
                            location: location,
                            locationId: location
                          }, salary && { salary: salary }, {
                            title: title,
                            url: source
                          })
                        });

                      case 4:
                        response = _context.sent;

                        if (!response.url) {
                          _context.next = 12;
                          break;
                        }

                        console.log('Succesfully posted to ' + response.url);
                        job.urls.posted = response.url;
                        _context.next = 10;
                        return job.save();

                      case 10:
                        addedJob = _context.sent;
                        return _context.abrupt('return', addedJob);

                      case 12:
                        console.error('Failed to post - ' + response);
                        return _context.abrupt('return', { error: response });

                      case 16:
                        _context.prev = 16;
                        _context.t0 = _context['catch'](1);

                        console.error(_context.t0);
                        return _context.abrupt('return', { error: _context.t0 });

                      case 20:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined, [[1, 16]]);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }(), { concurrency: 1 });

          case 2:
            postedJobs = _context2.sent;
            return _context2.abrupt('return', postedJobs);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function postJobs(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = postJobs;