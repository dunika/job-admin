'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'src/pages/layout/Main.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 40px 15px;\n'], ['\n  padding: 40px 15px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #003399;\n  padding: 10px 15px;\n'], ['\n  background-color: #003399;\n  padding: 10px 15px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  color: #FFFFFF;\n  margin-right: 20px;\n'], ['\n  color: #FFFFFF;\n  margin-right: 20px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = require('../../client/shared/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents2.default.div(_templateObject);

var Content = _styledComponents2.default.div(_templateObject2);

var Header = _styledComponents2.default.div(_templateObject3);

var HeaderLink = (0, _styledComponents2.default)(_components.Link)(_templateObject4);

var Main = function Main(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    Container,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    },
    _react2.default.createElement(
      Header,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      },
      _react2.default.createElement(
        HeaderLink,
        { to: '/', shallow: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        'Jobs'
      ),
      _react2.default.createElement(
        HeaderLink,
        { to: '/cv-library', shallow: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        'CV Library'
      ),
      _react2.default.createElement(
        HeaderLink,
        { to: '/indeed', shallow: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        'Indeed'
      )
    ),
    _react2.default.createElement(
      Content,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      },
      children
    )
  );
};

exports.default = Main;