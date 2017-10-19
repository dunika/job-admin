'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _expressRestifyMongoose = require('express-restify-mongoose');

var _expressRestifyMongoose2 = _interopRequireDefault(_expressRestifyMongoose);

var _database = require('../database');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var api = (0, _express.Router)();

  _expressRestifyMongoose2.default.serve(api, _database.models.Job, {
    name: 'job',
    prefix: '',
    version: ''
  });

  api.patch('/job', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
      var updatedJobs;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _bluebird2.default.map(req.body, function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref3) {
                  var _id = _ref3._id,
                      data = (0, _objectWithoutProperties3.default)(_ref3, ['_id']);
                  var updatedJob;
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _database.models.Job.findByIdAndUpdate({ _id: _id }, { $set: (0, _extends3.default)({}, data) });

                        case 2:
                          updatedJob = _context.sent;
                          return _context.abrupt('return', updatedJob);

                        case 4:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, undefined);
                }));

                return function (_x4) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 3:
              updatedJobs = _context2.sent;

              res.status(200).json(updatedJobs.map(function (_ref4) {
                var _id = _ref4._id;
                return _id;
              }));
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);
              next(_context2.t0);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());

  return api;
};