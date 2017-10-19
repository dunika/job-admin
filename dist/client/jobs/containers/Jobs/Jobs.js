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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return _react2.default.createElement(
    Container,
    { isLoading: isLoading, __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    },
    _react2.default.createElement(
      _components.Flex,
      { justify: 'space-between', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      },
      _react2.default.createElement(
        Results,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        jobs.map(function (job) {
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
        })
      ),
      _react2.default.createElement(_Filters2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })
    ),
    _react2.default.createElement(
      ActionBar,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      },
      _react2.default.createElement(
        _components.Flex,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        _react2.default.createElement(
          'button',
          { onClick: dismissJobs, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          'Dismiss Jobs'
        ),
        _react2.default.createElement(
          'button',
          { onClick: addJobsToWordpress, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          'Add Jobs to Wordpress'
        )
      )
    )
  );
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