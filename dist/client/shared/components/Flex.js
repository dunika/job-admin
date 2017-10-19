'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: ', ';\n  ', ';\n  ', ';\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = _styledComponents2.default.div(_templateObject, function (_ref) {
  var col = _ref.col;
  return col ? 'column' : 'row';
}, function (_ref2) {
  var align = _ref2.align;
  return align && 'align-items: ' + align;
}, function (_ref3) {
  var justify = _ref3.justify;
  return justify && 'justify-content: ' + justify;
});

exports.default = Flex;