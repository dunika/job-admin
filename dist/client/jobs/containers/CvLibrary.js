'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/client/jobs/containers/CvLibrary.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../shared/utils');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CVLibrary = function CVLibrary(_ref) {
  var addJobs = _ref.addJobs,
      isLoading = _ref.isLoading;
  return _react2.default.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      'CV Library'
    ),
    _react2.default.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      _react2.default.createElement(
        'button',
        { disabled: isLoading, onClick: addJobs, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        isLoading ? 'Adding jobs...' : 'Add Jobs to Database'
      )
    )
  );
};

exports.default = (0, _utils.connectReselect)({
  isLoading: _store.selectors.isLoading
}, {
  addJobs: _store.actions.addCvLibraryJobs
})(CVLibrary);