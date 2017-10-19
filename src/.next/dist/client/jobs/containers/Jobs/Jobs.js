'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = require('../../../shared/components');

var _utils = require('../../../shared/utils');

var _store = require('../../store');

var _components2 = require('../../components');

var _Filters = require('./Filters');

var _Filters2 = _interopRequireDefault(_Filters);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'Jobs__Container',
  componentId: 'pw4mtt-0'
})(['', ''], function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && '\n    opacity: 0.5;\n    pointer-events: none;\n    overflow: hidden;\n  ';
});

var Results = _styledComponents2.default.div.withConfig({
  displayName: 'Jobs__Results',
  componentId: 'pw4mtt-1'
})(['padding-right:20px;']);

var ActionBar = _styledComponents2.default.div.withConfig({
  displayName: 'Jobs__ActionBar',
  componentId: 'pw4mtt-2'
})(['background-color:#003399;bottom:0;left:0;position:fixed;width:100%;padding:10px 0;button{margin-left:15px;}']);

var Jobs = function Jobs(_ref2) {
  var isLoading = _ref2.isLoading,
      addJobsToWordpress = _ref2.addJobsToWordpress,
      dismissJobs = _ref2.dismissJobs,
      jobs = _ref2.jobs,
      selectedJobIds = _ref2.selectedJobIds,
      toggleJob = _ref2.toggleJob;
  return _react2.default.createElement(Container, { isLoading: isLoading }, _react2.default.createElement(_components.Flex, { justify: 'space-between' }, _react2.default.createElement(Results, null, jobs.map(function (job) {
    return _react2.default.createElement(_components2.Job, {
      key: '' + job._id,
      isSelected: selectedJobIds[job._id],
      toggle: toggleJob,
      job: job
    });
  })), _react2.default.createElement(_Filters2.default, null)), _react2.default.createElement(ActionBar, null, _react2.default.createElement(_components.Flex, null, _react2.default.createElement('button', { onClick: dismissJobs }, 'Dismiss Jobs'), _react2.default.createElement('button', { onClick: addJobsToWordpress }, 'Add Jobs to Wordpress'))));
};

exports.default = (0, _utils.connectReselect)({
  jobs: _store.selectors.filteredJobs,
  isLoading: _store.selectors.isLoading,
  selectedJobIds: _store.selectors.selectedJobIds
}, {
  dismissJobs: _store.actions.dismissJobs,
  addJobsToWordpress: _store.actions.addJobsToWordpress,
  toggleJob: _store.actions.toggleJob
})(Jobs);