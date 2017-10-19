'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'src/client/jobs/components/Job.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 20px;\n  width: 500px;\n'], ['\n  margin-bottom: 20px;\n  width: 500px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: bold;\n  font-size: 21px;\n  margin-bottom: 5px;\n'], ['\n  font-weight: bold;\n  font-size: 21px;\n  margin-bottom: 5px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  white-space: pre;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  white-space: pre-line;\n'], ['\n  white-space: pre;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  white-space: pre-line;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  margin-bottom: 5px;  \n'], ['\n  display: block;\n  margin-bottom: 5px;  \n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  color: #FFF;\n  font-weight: bold;\n  padding: 5px 15px;\n  margin-bottom: 5px;\n  background-color: #003399;\n  ', '\n'], ['\n  display: inline-block;\n  color: #FFF;\n  font-weight: bold;\n  padding: 5px 15px;\n  margin-bottom: 5px;\n  background-color: #003399;\n  ', '\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 12px;\n'], ['\n  font-size: 12px;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 10px 0 0 ;\n  font-weight: bold;\n  &:first-child {\n    &::after {\n      padding-left: 7px;\n      content: "|";\n    }\n  }\n'], ['\n  margin: 0 10px 0 0 ;\n  font-weight: bold;\n  &:first-child {\n    &::after {\n      padding-left: 7px;\n      content: "|";\n    }\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  cursor: pointer;\n  margin-right: 10px;\n  ', '\n'], ['\n  cursor: pointer;\n  margin-right: 10px;\n  ', '\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  margin-right: 10px;\n'], ['\n  margin-right: 10px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _components = require('../../shared/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Result = _styledComponents2.default.div(_templateObject);

var Title = (0, _styledComponents2.default)(_components.Link)(_templateObject2);

var Description = _styledComponents2.default.p(_templateObject3);

var PostedUrl = _styledComponents2.default.a(_templateObject4);

var PostedStatus = _styledComponents2.default.span(_templateObject5, function (_ref) {
  var isPosted = _ref.isPosted;
  return isPosted && '\n    background-color: green;\n  ';
});

var Date = _styledComponents2.default.p(_templateObject6);

var Info = _styledComponents2.default.p(_templateObject7);

var CheckboxArea = _styledComponents2.default.div(_templateObject8, function (_ref2) {
  var isSelected = _ref2.isSelected;
  return isSelected && '\n    background: red;\n  ';
});

var Source = _styledComponents2.default.a(_templateObject9);

var Job = function Job(_ref3) {
  var shouldOpenPostJob = _ref3.shouldOpenPostJob,
      showFullDescription = _ref3.showFullDescription,
      toggle = _ref3.toggle,
      isSelected = _ref3.isSelected,
      job = _ref3.job;
  return _react2.default.createElement(
    Result,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    },
    _react2.default.createElement(
      _components.Flex,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      },
      toggle && _react2.default.createElement(
        CheckboxArea,
        {
          onClick: function onClick() {
            return toggle(job._id);
          },
          isSelected: isSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        _react2.default.createElement(_components.Checkbox, {
          type: 'checkbox',
          checked: !!isSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        })
      ),
      _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        },
        _react2.default.createElement(
          Title,
          { to: '/' + (shouldOpenPostJob ? 'post-job' : 'jobs') + '/' + job._id, shallow: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          },
          job.title
        ),
        _react2.default.createElement(
          _components.Flex,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          job.company && _react2.default.createElement(
            Info,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            },
            job.company
          ),
          job.source === 'cv-library' && _react2.default.createElement(
            Info,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            },
            'Cv Library'
          ),
          _react2.default.createElement(
            Info,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            },
            job.location
          )
        ),
        job.fullAddress && job.fullAddress !== job.location && _react2.default.createElement(
          'p',
          {
            style: { fontSize: 12 },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          },
          _react2.default.createElement(
            'strong',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              }
            },
            'Full address: ',
            job.fullAddress
          )
        ),
        _react2.default.createElement(Description, {
          dangerouslySetInnerHTML: {
            __html: '' + (showFullDescription ? job.description : job.description.substr(0, 100) + '...')
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }),
        job.urls.source && _react2.default.createElement(
          Source,
          {
            target: '_blank',
            href: job.urls.nonSponsoredSource || job.urls.source,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            }
          },
          'View Source'
        ),
        job.urls.posted && _react2.default.createElement(
          PostedStatus,
          { isPosted: job.urls.posted, __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            }
          },
          job.urls.posted ? 'Posted' : 'Not posted'
        ),
        job.urls.posted && _react2.default.createElement(
          PostedUrl,
          { target: '_blank', href: job.urls.posted, __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            }
          },
          job.urls.posted
        ),
        _react2.default.createElement(
          Date,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            }
          },
          (0, _moment2.default)(job.date).format('dddd, MMMM, Do')
        )
      )
    )
  );
};

exports.default = Job;