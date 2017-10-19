'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'src/client/indeed/containers/Search.js';

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

var Jobs = function Jobs(_ref2) {
  var keywordRef = _ref2.keywordRef,
      locationRef = _ref2.locationRef,
      countryRef = _ref2.countryRef,
      handleSearch = _ref2.handleSearch,
      isLoading = _ref2.isLoading,
      jobs = _ref2.jobs;
  return _react2.default.createElement(Container, { isLoading: isLoading, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_components.Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('input', { placeholder: 'Keywords', ref: keywordRef, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement('input', { placeholder: 'Location', ref: locationRef, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), _react2.default.createElement('input', { placeholder: 'Country code', ref: countryRef, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement('button', { onClick: handleSearch, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, 'Search')), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement(_components.Flex, { justify: 'space-between', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement(Results, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, jobs.map(function (job) {
    return _react2.default.createElement(_jobs.Job, {
      showFullDescription: true,
      shouldOpenPostJob: true,
      key: '' + job._id,
      job: job,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2luZGVlZC9jb250YWluZXJzL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwyIiwicmVxdWlyZSIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9qc3hGaWxlTmFtZSIsIl90ZW1wbGF0ZU9iamVjdCIsImRlZmF1bHQiLCJfdGVtcGxhdGVPYmplY3QyIiwiX3JlYWN0IiwiX3JlYWN0MiIsIl9zdHlsZWRDb21wb25lbnRzIiwiX3N0eWxlZENvbXBvbmVudHMyIiwiX2NvbXBvc2UiLCJfY29tcG9zZTIiLCJfd2l0aFN0YXRlSGFuZGxlcnMiLCJfd2l0aFN0YXRlSGFuZGxlcnMyIiwiX3dpdGhIYW5kbGVycyIsIl93aXRoSGFuZGxlcnMyIiwiX2NvbXBvbmVudHMiLCJfdXRpbHMiLCJfam9icyIsIl9zdG9yZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJDb250YWluZXIiLCJkaXYiLCJfcmVmIiwiaXNMb2FkaW5nIiwiUmVzdWx0cyIsIkpvYnMiLCJfcmVmMiIsImtleXdvcmRSZWYiLCJsb2NhdGlvblJlZiIsImNvdW50cnlSZWYiLCJoYW5kbGVTZWFyY2giLCJqb2JzIiwiY3JlYXRlRWxlbWVudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiRmxleCIsInBsYWNlaG9sZGVyIiwicmVmIiwib25DbGljayIsImp1c3RpZnkiLCJtYXAiLCJqb2IiLCJKb2IiLCJzaG93RnVsbERlc2NyaXB0aW9uIiwic2hvdWxkT3BlblBvc3RKb2IiLCJrZXkiLCJfaWQiLCJlbmhhbmNlIiwia2V5d29yZElucHV0IiwibG9jYXRpb25JbnB1dCIsImNvdW50cnlJbnB1dCIsImNvbm5lY3RSZXNlbGVjdCIsInNlbGVjdG9ycyIsInNlYXJjaCIsImFjdGlvbnMiLCJfcmVmMyIsImtleXdv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