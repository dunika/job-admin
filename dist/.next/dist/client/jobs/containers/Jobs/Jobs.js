'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'src/client/jobs/containers/Jobs/Jobs.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding-right: 20px;\n'], ['\n  padding-right: 20px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #003399;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  width: 100%;\n  padding: 10px 0;\n  button {\n    margin-left: 15px;\n  }\n'], ['\n  background-color: #003399;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  width: 100%;\n  padding: 10px 0;\n  button {\n    margin-left: 15px;\n  }\n']);

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

var Container = _styledComponents2.default.div(_templateObject, function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && '\n    opacity: 0.5;\n    pointer-events: none;\n    overflow: hidden;\n  ';
});

var Results = _styledComponents2.default.div(_templateObject2);

var ActionBar = _styledComponents2.default.div(_templateObject3);

var Jobs = function Jobs(_ref2) {
  var isLoading = _ref2.isLoading,
      addJobsToWordpress = _ref2.addJobsToWordpress,
      dismissJobs = _ref2.dismissJobs,
      jobs = _ref2.jobs,
      selectedJobIds = _ref2.selectedJobIds,
      toggleJob = _ref2.toggleJob;
  return _react2.default.createElement(Container, { isLoading: isLoading, __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(_components.Flex, { justify: 'space-between', __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(Results, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, jobs.map(function (job) {
    return _react2.default.createElement(_components2.Job, {
      key: '' + job._id,
      isSelected: selectedJobIds[job._id],
      toggle: toggleJob,
      job: job,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    });
  })), _react2.default.createElement(_Filters2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  })), _react2.default.createElement(ActionBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement(_components.Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement('button', { onClick: dismissJobs, __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, 'Dismiss Jobs'), _react2.default.createElement('button', { onClick: addJobsToWordpress, __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, 'Add Jobs to Wordpress'))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2pvYnMvY29udGFpbmVycy9Kb2JzL0pvYnMuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsInJlcXVpcmUiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfanN4RmlsZU5hbWUiLCJfdGVtcGxhdGVPYmplY3QiLCJkZWZhdWx0IiwiX3RlbXBsYXRlT2JqZWN0MiIsIl90ZW1wbGF0ZU9iamVjdDMiLCJfcmVhY3QiLCJfcmVhY3QyIiwiX3N0eWxlZENvbXBvbmVudHMiLCJfc3R5bGVkQ29tcG9uZW50czIiLCJfY29tcG9uZW50cyIsIl91dGlscyIsIl9zdG9yZSIsIl9jb21wb25lbnRzMiIsIl9GaWx0ZXJzIiwiX0ZpbHRlcnMyIiwib2JqIiwiX19lc01vZHVsZSIsIkNvbnRhaW5lciIsImRpdiIsIl9yZWYiLCJpc0xvYWRpbmciLCJSZXN1bHRzIiwiQWN0aW9uQmFyIiwiSm9icyIsIl9yZWYyIiwiYWRkSm9ic1RvV29yZHByZXNzIiwiZGlzbWlzc0pvYnMiLCJqb2JzIiwic2VsZWN0ZWRKb2JJZHMiLCJ0b2dnbGVKb2IiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJGbGV4IiwianVzdGlmeSIsIm1hcCIsImpvYiIsIkpvYiIsImtleSIsIl9pZCIsImlzU2VsZWN0ZWQiLCJ0b2dnbGUiLCJvbkNsaWNrIiwiY29ubmVjdFJlc2VsZWN0Iiwic2VsZWN0b3JzIiwiZmlsdGVyZWRKb2JzIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsT0FBQSxBQUFPLGVBQVAsQUFBc0IsU0FBdEIsQUFBK0I7U0FBL0IsQUFBNkMsQUFDcEM7QUFEb0MsQUFDM0M7O0FBR0YsSUFBSSwwQkFBSixBQUFJLEFBQTBCOztBQUU5QixJQUFJLDBCQUEw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