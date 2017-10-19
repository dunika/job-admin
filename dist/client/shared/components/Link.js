'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'src/client/shared/components/Link.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n'], ['\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('../../../routes');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = _styledComponents2.default.a(_templateObject);

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      otherProps = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className']);
  return _react2.default.createElement(
    _routes.Link,
    (0, _extends3.default)({}, otherProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    _react2.default.createElement(
      A,
      { href: otherProps.to, className: className, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      children
    )
  );
};

exports.default = Link;