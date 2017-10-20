'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withStateHandlers = require('recompose/withStateHandlers');

var _withStateHandlers2 = _interopRequireDefault(_withStateHandlers);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _components = require('../../shared/components');

var _utils = require('../../shared/utils');

var _jobs = require('../../jobs');

var _store = require('../store');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'Search__Container',
  componentId: 'lygt80-0'
})(['', ''], function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && '\n    opacity: 0.5;\n    pointer-events: none;\n    overflow: hidden;\n  ';
});

var Results = _styledComponents2.default.div.withConfig({
  displayName: 'Search__Results',
  componentId: 'lygt80-1'
})(['padding-right:20px;']);

var Jobs = function Jobs(_ref2) {
  var keywordRef = _ref2.keywordRef,
      locationRef = _ref2.locationRef,
      countryRef = _ref2.countryRef,
      handleSearch = _ref2.handleSearch,
      isLoading = _ref2.isLoading,
      jobs = _ref2.jobs;
  return _react2.default.createElement(Container, { isLoading: isLoading }, _react2.default.createElement(_components.Flex, null, _react2.default.createElement('input', { placeholder: 'Keywords', ref: keywordRef }), _react2.default.createElement('input', { placeholder: 'Location', ref: locationRef }), _react2.default.createElement('input', { placeholder: 'Country code', ref: countryRef }), _react2.default.createElement('button', { onClick: handleSearch }, 'Search')), _react2.default.createElement('br', null), _react2.default.createElement(_components.Flex, { justify: 'space-between' }, _react2.default.createElement(Results, null, jobs.map(function (job) {
    return _react2.default.createElement(_jobs.Job, {
      showFullDescription: true,
      shouldOpenPostJob: true,
      key: '' + job._id,
      job: job
    });
  }))));
};

var enhance = (0, _compose2.default)((0, _withStateHandlers2.default)({
  keywordInput: null,
  locationInput: null,
  countryInput: null
}, {
  keywordRef: function keywordRef() {
    return function (keywordInput) {
      return { keywordInput: keywordInput };
    };
  },
  locationRef: function locationRef() {
    return function (locationInput) {
      return { locationInput: locationInput };
    };
  },
  countryRef: function countryRef() {
    return function (countryInput) {
      return { countryInput: countryInput };
    };
  }
}), (0, _utils.connectReselect)({
  jobs: _store.selectors.jobs,
  isLoading: _store.selectors.isLoading
}, {
  search: _store.actions.search
}), (0, _withHandlers2.default)({
  handleSearch: function handleSearch(_ref3) {
    var search = _ref3.search,
        keywordInput = _ref3.keywordInput,
        locationInput = _ref3.locationInput,
        countryInput = _ref3.countryInput;
    return function () {
      search({
        keywords: keywordInput.value,
        location: locationInput.value,
        country: countryInput.value
      });
    };
  }
}));

exports.default = enhance(Jobs);