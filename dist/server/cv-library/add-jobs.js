'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _xml2json = require('xml2json');

var _xml2json2 = _interopRequireDefault(_xml2json);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _config = require('../../config');

var _isomorphic = require('../../isomorphic');

var _database = require('../database');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const readAsync = promisify(fs.readFile);

var sanitizeSalary = function sanitizeSalary(salary) {
  if (typeof salary === 'string') {
    var sanitized = salary.replace(/&pound;|&euro;/g, '€').replace('€NEG', '');
    var match = sanitized.match(/(.*[/][^\s]+)/g);
    return match ? match[0] : sanitized;
  }
  return null;
};
// import { resolve } from 'path';
// import fs from 'fs';

// import { promisify } from 'util';


var withLocation = function withLocation(jobs) {
  return jobs.map(function (_ref) {
    var county = _ref.county,
        location = _ref.location,
        job = (0, _objectWithoutProperties3.default)(_ref, ['county', 'location']);

    if ((0, _isString2.default)(county)) {
      var regex = new RegExp('' + (county + ' ' + location).split(' ').join('|'));
      var jobLocation = _isomorphic.regions.find(function (region) {
        return regex.test(region);
      });
      return (0, _extends3.default)({}, job, {
        location: jobLocation
      });
    }
    return job;
  }).filter(function (_ref2) {
    var location = _ref2.location;
    return !!location;
  });
};

var withSalary = function withSalary(_ref3, salary) {
  var description = _ref3.description,
      data = (0, _objectWithoutProperties3.default)(_ref3, ['description']);
  return (0, _extends3.default)({
    salary: salary,
    description: salary + '\n          \n' + description
  }, data);
};

exports.default = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var xml, _parseXml$toJson, parsedJobs, jobs, addedJobs;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            console.log('Fetching jobs from CV Library');
            // const testXml = await readAsync(resolve(__dirname, '../../files/test.xml'));
            _context2.next = 4;
            return (0, _isomorphic.request)(_config.cvLibraryApi);

          case 4:
            xml = _context2.sent;
            _parseXml$toJson = _xml2json2.default.toJson(xml, { object: true }), parsedJobs = _parseXml$toJson.jobs.job;
            jobs = withLocation(parsedJobs);
            _context2.next = 9;
            return _bluebird2.default.map(jobs, function () {
              var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref6) {
                var description = _ref6.description,
                    jobref = _ref6.jobref,
                    location = _ref6.location,
                    salary = _ref6.salary,
                    title = _ref6.title,
                    url = _ref6.url;
                var sanitizedSalary, data, newJob, addedJob;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        sanitizedSalary = sanitizeSalary(salary);
                        data = {
                          description: description,
                          location: location,
                          urls: {
                            source: url
                          },
                          source: 'cv-library',
                          sourceId: jobref,
                          title: title
                        };
                        _context.prev = 2;
                        newJob = new _database.models.Job(sanitizedSalary ? withSalary(data, sanitizedSalary) : data);
                        _context.next = 6;
                        return newJob.save();

                      case 6:
                        addedJob = _context.sent;
                        return _context.abrupt('return', addedJob);

                      case 10:
                        _context.prev = 10;
                        _context.t0 = _context['catch'](2);

                        console.log(_context.t0);
                        return _context.abrupt('return', null);

                      case 14:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined, [[2, 10]]);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }());

          case 9:
            addedJobs = _context2.sent;

            res.status(200).json([].concat((0, _toConsumableArray3.default)(addedJobs.filter(function (value) {
              return !!value;
            }))));
            return _context2.abrupt('return');

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2['catch'](0);

            next(_context2.t0);

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 14]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();