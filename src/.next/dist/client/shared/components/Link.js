'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('../../../routes');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var A = _styledComponents2.default.a.withConfig({
  displayName: 'Link__A',
  componentId: 's19s0wzs-0'
})(['text-decoration:none;&:hover{text-decoration:underline;}']);

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      otherProps = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className']);
  return _react2.default.createElement(_routes.Link, otherProps, _react2.default.createElement(A, { href: otherProps.to, className: className }, children));
};

exports.default = Link;