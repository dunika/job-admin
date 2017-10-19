'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = 'src/pages/_document.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

var _theme = require('../client/shared/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);
    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }));
      var style = sheet.getStyleElement();
      return _react2.default.createElement(
        'html',
        { lang: 'en', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        _react2.default.createElement(
          _document.Head,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans|Roboto', rel: 'stylesheet', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          }),
          style
        ),
        _react2.default.createElement(
          'body',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          _react2.default.createElement(
            'div',
            { id: 'root', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            main
          ),
          _react2.default.createElement(_document.NextScript, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          })
        )
      );
    }
  }]);
  return MyDocument;
}(_document2.default);

exports.default = MyDocument;