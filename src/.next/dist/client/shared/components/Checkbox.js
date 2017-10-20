'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var sizes = {
  small: {
    label: 'font-size: 12px;',
    checkbox: 'height: 15px;width: 15px;margin: 5px 5px 5px 0;'
  },
  regular: {
    label: 'font-size: 16px;',
    checkbox: 'height: 20px;width: 20px;margin: 10px;'
  }
};

var CheckboxStyled = _styledComponents2.default.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: 'Checkbox__CheckboxStyled',
  componentId: 'doph6o-0'
})(['', ' flex-shrink:0;'], function (_ref) {
  var size = _ref.size;
  return sizes[size].checkbox;
});

var Label = _styledComponents2.default.label.withConfig({
  displayName: 'Checkbox__Label',
  componentId: 'doph6o-1'
})(['', ''], function (_ref2) {
  var size = _ref2.size;
  return sizes[size].label;
});

var Checkbox = function Checkbox(_ref3) {
  var label = _ref3.label,
      _ref3$size = _ref3.size,
      size = _ref3$size === undefined ? 'regular' : _ref3$size,
      otherProps = (0, _objectWithoutProperties3.default)(_ref3, ['label', 'size']);
  return _react2.default.createElement(_Flex2.default, { align: 'center' }, _react2.default.createElement(CheckboxStyled, (0, _extends3.default)({
    size: size
  }, otherProps)), label && _react2.default.createElement(Label, { size: size }, label));
};

exports.default = Checkbox;