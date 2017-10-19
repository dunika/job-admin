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

var _jsxFileName = 'src/client/shared/components/Checkbox.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  flex-shrink: 0;\n'], ['\n  ', '\n  flex-shrink: 0;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n'], ['\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
})(_templateObject, function (_ref) {
  var size = _ref.size;
  return sizes[size].checkbox;
});

var Label = _styledComponents2.default.label(_templateObject2, function (_ref2) {
  var size = _ref2.size;
  return sizes[size].label;
});

var Checkbox = function Checkbox(_ref3) {
  var label = _ref3.label,
      _ref3$size = _ref3.size,
      size = _ref3$size === undefined ? 'regular' : _ref3$size,
      otherProps = (0, _objectWithoutProperties3.default)(_ref3, ['label', 'size']);
  return _react2.default.createElement(
    _Flex2.default,
    { align: 'center', __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    },
    _react2.default.createElement(CheckboxStyled, (0, _extends3.default)({
      size: size
    }, otherProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    })),
    label && _react2.default.createElement(
      Label,
      { size: size, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      },
      label
    )
  );
};

exports.default = Checkbox;