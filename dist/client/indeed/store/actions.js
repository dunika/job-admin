'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _utils = require('../../shared/utils');

var _isomorphic = require('../../../isomorphic');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLocation = function getLocation(location) {
  var regex = new RegExp(location.replace(',', '').split(' ').join('|'));
  return _isomorphic.regions.find(function (region) {
    return regex.test(region);
  });
};

// TODO: Move the main normalization to server
// TODO: Rename location to region
var normalizeJobs = function normalizeJobs(data) {
  return data.reduce(function (results, _ref) {
    var snippet = _ref.snippet,
        jobtitle = _ref.jobtitle,
        formattedLocationFull = _ref.formattedLocationFull,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['snippet', 'jobtitle', 'formattedLocationFull']);
    return (0, _extends4.default)({}, results, (0, _defineProperty3.default)({}, rest.jobkey, (0, _extends4.default)({
      _id: rest.jobkey,
      source: 'indeed',
      sourceId: rest.jobkey,
      title: jobtitle,
      description: snippet,
      fullAddress: formattedLocationFull,
      location: getLocation(formattedLocationFull),
      urls: {
        nonSponsoredSource: 'https://ie.indeed.com/rc/clk?jk=' + rest.jobkey,
        source: rest.url
      }
    }, rest)));
  }, {});
};

exports.default = {
  search: (0, _utils.createAsyncAction)('SEARCH_INDEED', normalizeJobs),
  addJobToWordpress: (0, _utils.createAsyncAction)('ADD_JOB_TO_WORDPRESS')
};