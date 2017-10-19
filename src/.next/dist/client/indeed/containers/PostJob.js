'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
  displayName: 'PostJob__Container',
  componentId: 'cjq17n-0'
})(['', ''], function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && '\n    opacity: 0.5;\n    pointer-events: none;\n    overflow: hidden;\n  ';
});

var Results = _styledComponents2.default.div.withConfig({
  displayName: 'PostJob__Results',
  componentId: 'cjq17n-1'
})(['padding-right:20px;']);

var PostJob = function PostJob(_ref2) {
  var descriptionRef = _ref2.descriptionRef,
      salaryRef = _ref2.salaryRef,
      addJob = _ref2.addJob,
      isLoading = _ref2.isLoading,
      job = _ref2.job;
  return _react2.default.createElement(Container, { isLoading: isLoading }, _react2.default.createElement(_components.Flex, { justify: 'space-between' }, _react2.default.createElement(Results, null, _react2.default.createElement(_jobs.Job, { showFullDescription: true, job: job }))), _react2.default.createElement('br', null), _react2.default.createElement(_components.Flex, { col: true }, _react2.default.createElement('input', { placeholder: 'Salary', ref: salaryRef }), _react2.default.createElement('br', null), _react2.default.createElement('textarea', { rows: '10', placeholder: 'Description', ref: descriptionRef }), _react2.default.createElement('br', null), _react2.default.createElement('button', { onClick: addJob }, 'Post Job')));
};

var enhance = (0, _compose2.default)((0, _withStateHandlers2.default)({
  descriptionInput: null,
  salaryInput: null,
  countryInput: null
}, {
  descriptionRef: function descriptionRef() {
    return function (descriptionInput) {
      return { descriptionInput: descriptionInput };
    };
  },
  salaryRef: function salaryRef() {
    return function (salaryInput) {
      return { salaryInput: salaryInput };
    };
  }
}), (0, _utils.connectReselect)({
  isLoading: _store.selectors.isLoading
}, {
  addJobToWordpress: _store.actions.addJobToWordpress
}), (0, _withHandlers2.default)({
  addJob: function addJob(_ref3) {
    var addJobToWordpress = _ref3.addJobToWordpress,
        job = _ref3.job,
        descriptionInput = _ref3.descriptionInput,
        salaryInput = _ref3.salaryInput;
    return function () {
      addJobToWordpress((0, _extends3.default)({}, job, {
        urls: {
          source: job.urls.nonSponsoredSource
        },
        description: descriptionInput.value,
        salary: salaryInput.value
      }));
    };
  }
}));

exports.default = enhance(PostJob);