'use strict';

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  html, body, #root {\n    font-family: \'Open Sans\';\n    padding: 0;\n    margin: 0;\n    height: 100%;\n  }\n  \n  #root {\n    display: flex;\n    flex-direction: column;\n    & > div {\n      flex-grow: 1;\n    }\n  }\n\n  pre {\n    font-family: \'Open Sans\';     \n  }\n\n  p {\n    margin: 0px;\n  }\n'], ['\n  html, body, #root {\n    font-family: \'Open Sans\';\n    padding: 0;\n    margin: 0;\n    height: 100%;\n  }\n  \n  #root {\n    display: flex;\n    flex-direction: column;\n    & > div {\n      flex-grow: 1;\n    }\n  }\n\n  pre {\n    font-family: \'Open Sans\';     \n  }\n\n  p {\n    margin: 0px;\n  }\n']);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
var global = (0, _styledComponents.injectGlobal)(_templateObject);
/* eslint-disable */