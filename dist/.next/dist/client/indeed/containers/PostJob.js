'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'src/client/indeed/containers/PostJob.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding-right: 20px;\n'], ['\n  padding-right: 20px;\n']);

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

var Container = _styledComponents2.default.div(_templateObject, function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && '\n    opacity: 0.5;\n    pointer-events: none;\n    overflow: hidden;\n  ';
});

var Results = _styledComponents2.default.div(_templateObject2);

var PostJob = function PostJob(_ref2) {
  var descriptionRef = _ref2.descriptionRef,
      salaryRef = _ref2.salaryRef,
      addJob = _ref2.addJob,
      isLoading = _ref2.isLoading,
      job = _ref2.job;
  return _react2.default.createElement(Container, { isLoading: isLoading, __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_components.Flex, { justify: 'space-between', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(Results, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_jobs.Job, { showFullDescription: true, job: job, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }))), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), _react2.default.createElement(_components.Flex, { col: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('input', { placeholder: 'Salary', ref: salaryRef, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement('textarea', { rows: '10', placeholder: 'Description', ref: descriptionRef, __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement('button', { onClick: addJob, __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, 'Post Job')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2luZGVlZC9jb250YWluZXJzL1Bvc3RKb2IuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfZXh0ZW5kczIiLCJyZXF1aXJlIiwiX2V4dGVuZHMzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwyIiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbDMiLCJfanN4RmlsZU5hbWUiLCJfdGVtcGxhdGVPYmplY3QiLCJkZWZhdWx0IiwiX3RlbXBsYXRlT2JqZWN0MiIsIl9yZWFjdCIsIl9yZWFjdDIiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9zdHlsZWRDb21wb25lbnRzMiIsIl9jb21wb3NlIiwiX2NvbXBvc2UyIiwiX3dpdGhTdGF0ZUhhbmRsZXJzIiwiX3dpdGhTdGF0ZUhhbmRsZXJzMiIsIl93aXRoSGFuZGxlcnMiLCJfd2l0aEhhbmRsZXJzMiIsIl9jb21wb25lbnRzIiwiX3V0aWxzIiwiX2pvYnMiLCJfc3RvcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiQ29udGFpbmVyIiwiZGl2IiwiX3JlZiIsImlzTG9hZGluZyIsIlJlc3VsdHMiLCJQb3N0Sm9iIiwiX3JlZjIiLCJkZXNjcmlwdGlvblJlZiIsInNhbGFyeVJlZiIsImFkZEpvYiIsImpvYiIsImNyZWF0ZUVsZW1lbnQiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkZsZXgiLCJqdXN0aWZ5IiwiSm9iIiwic2hvd0Z1bGxEZXNjcmlwdGlvbiIsImNvbCIsInBsYWNlaG9sZGVyIiwicmVmIiwicm93cyIsIm9uQ2xpY2siLCJlbmhhbmNlIiwiZGVzY3JpcHRpb25JbnB1dCIsInNhbGFyeUlucHV0IiwiY291bnRyeUlucHV0IiwiY29ubmVjdFJlc2VsZWN0Iiwic2VsZWN0b3JzIiwiYWRkSm9iVG9Xb3JkcHJlc3MiLCJhY3Rpb25zIiwiX3JlZjMiLCJ1cmxzIiwic291cmNl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