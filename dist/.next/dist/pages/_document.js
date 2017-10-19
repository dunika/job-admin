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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
      return _react2.default.createElement('html', { lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans|Roboto', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), style), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', { id: 'root', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, main), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })));
    }
  }]);
  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvcGFnZXMvX2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2dldFByb3RvdHlwZU9mIiwicmVxdWlyZSIsIl9nZXRQcm90b3R5cGVPZjIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9jbGFzc0NhbGxDaGVjazMiLCJfY3JlYXRlQ2xhc3MyIiwiX2NyZWF0ZUNsYXNzMyIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyIsIl9pbmhlcml0czIiLCJfaW5oZXJpdHMzIiwiX2pzeEZpbGVOYW1lIiwiX3JlYWN0IiwiX3JlYWN0MiIsIl9kb2N1bWVudCIsIl9kb2N1bWVudDIiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl90aGVtZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiTXlEb2N1bWVudCIsIl9Eb2N1bWVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwicmVuZGVyIiwic2hlZXQiLCJTZXJ2ZXJTdHlsZVNoZWV0IiwibWFpbiIsImNvbGxlY3RTdHlsZXMiLCJjcmVhdGVFbGVtZW50IiwiTWFpbiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwic3R5bGUiLCJnZXRTdHlsZUVsZW1lbnQiLCJsYW5nIiwiSGVhZCIsImhyZWYiLCJyZWwiLCJpZCIsIk5leHRTY3JpcHQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE9BQUEsQUFBTyxlQUFQLEFBQXNCLFNBQXRCLEFBQStCO1NBQS9CLEFBQTZDLEFBQ3BDO0FBRG9DLEFBQzNDOztBQUdGLElBQUksa0JBQUosQUFBSSxBQUFrQjs7QUFFdEIsSUFBSSxtQkFBbUIsdUJBQXZCLEFBQXVCLEFBQXVCOztBQUU5QyxJQUFJLG1CQUFKLEFBQUksQUFBbUI7O0FBRXZCLElBQUksbUJBQW1CLHVCQUF2QixBQUF1QixBQUF1Qjs7QUFFOUMsSUFBSSxnQkFBSixBQUFJLEFBQWdCOztBQUVwQixJQUFJLGdCQUFnQix1QkFBcEIsQUFBb0IsQUFBdUI7O0FBRTNDLElBQUksOEJBQUosQUFBSSxBQUE4Qjs7QUFFbEMsSUFBSSw4QkFBOEIsdUJBQWxDLEFBQWtDLEFBQXVCOztBQUV6RCxJQUFJLGFBQUosQUFBSSxBQUFhOztBQUVqQixJQUFJLGFBQWEsdUJBQWpCLEFBQWlCLEFBQXVCOztBQUV4QyxJQUFJLGVBQUosQUFBbUI7O0FBRW5CLElBQUksU0FBSixBQUFJLEFBQVM7O0FBRWIsSUFBSSxVQUFVLHVCQUFkLEFBQWMsQUFBdUI7O0FBRXJDLElBQUksWUFBSixBQUFJLEFBQVk7O0FBRWhCLElBQUksYUFBYSx1QkFBakIsQUFBaUIsQUFBdUI7O0FBRXhDLElBQUksb0JBQUosQUFBSSxBQUFvQjs7QUFFeEIsSUFBSSxTQUFKLEFBQWE7O0FBRWIsU0FBQSxBQUFTLHVCQUFULEFBQWdDLEtBQUssQUFBRTtTQUFPLE9BQU8sSUFBUCxBQUFXLGFBQVgsQUFBd0IsTUFBTSxFQUFFLFNBQXZDLEFBQXFDLEFBQVcsQUFBUTs7O0FBRS9GOztBQUVBLElBQUksdUJBQWEsQUFBVSxXQUFXLEFBQ3BDO0dBQUMsR0FBRyxXQUFKLEFBQWUsU0FBZixBQUF3QixZQUF4QixBQUFvQyxBQUVwQzs7V0FBQSxBQUFTLGFBQWEsQUFDcEI7S0FBQyxHQUFHLGlCQUFKLEFBQXFCLFNBQXJCLEFBQThCLE1BQTlCLEFBQW9DLEFBQ3BDO1dBQU8sQ0FBQyxHQUFHLDRCQUFKLEFBQWdDLFNBQWhDLEFBQXlDLE1BQU0sQ0FBQyxXQUFBLEFBQVcsYUFBYSxDQUFDLEdBQUcsaUJBQUosQUFBcUIsU0FBOUMsQUFBeUIsQUFBOEIsYUFBdkQsQUFBb0UsTUFBcEUsQUFBMEUsTUFBaEksQUFBTyxBQUErQyxBQUFnRixBQUN2STtBQUVEOztHQUFDLEdBQUcsY0FBSixBQUFrQixTQUFsQixBQUEyQjtTQUFhLEFBQ2pDLEFBQ0w7V0FBTyxTQUFBLEFBQVMsU0FBUyxBQUN2QjtVQUFJLFFBQVEsSUFBSSxrQkFBaEIsQUFBWSxBQUFzQixBQUNsQztVQUFJLGFBQU8sQUFBTSxzQkFBYyxBQUFRLFFBQVIsQUFBZ0IsY0FBYyxVQUE5QixBQUF3Qzs7b0JBQzNELEFBQ0UsQUFDVjtzQkFISixBQUFXLEFBQW9CLEFBQThDLEFBQ2pFLEFBRUksQUFHaEI7QUFMWSxBQUNSO0FBRnlFLEFBQzNFLE9BRDZCLENBQXBCO1VBTVAsUUFBUSxNQUFaLEFBQVksQUFBTSxBQUNsQjtxQkFBTyxBQUFRLFFBQVIsQUFBZ0IsY0FBaEIsQUFDTCxVQUNFLE1BQUYsQUFBUSxNQUFNO29CQUFVLEFBQ1YsQUFDVjtzQkFKQyxBQUVMLEFBQXdCLEFBRVI7QUFGUSxBQUNwQjtBQURKLE9BRkssVUFPTCxBQUFRLFFBQVIsQUFBZ0IsY0FDZCxVQURGLEFBQ1k7O29CQUVFLEFBQ0UsQUFDVjtzQkFMTixBQUVFLEFBQ1ksQUFFSTtBQUZKLEFBQ1I7QUFGSixBQUNFLE9BSEosVUFRRSxBQUFRLFFBQVIsQUFBZ0IsY0FBaEIsQUFBOEIsVUFBVSxNQUFGLEFBQVEsNERBQTRELEtBQXBFLEFBQXlFLGNBQWM7b0JBQVUsQUFDekgsQUFDVjtzQkFWTixBQVFFLEFBQXNDLEFBQWlHLEFBRXZIO0FBRnVILEFBQ25JO0FBRGtDLE9BQXRDLEdBZkcsQUFPTCxBQWFFLGdCQUVGLEFBQVEsUUFBUixBQUFnQixjQUFoQixBQUNFOztvQkFFWSxBQUNFLEFBQ1Y7c0JBTE4sQUFFRSxBQUNZLEFBRUk7QUFGSixBQUNSO0FBRkosQUFDRSxPQUhKLFVBUUUsQUFBUSxRQUFSLEFBQWdCLGNBQWhCLEFBQ0UsU0FDRSxJQUFGLEFBQU0sUUFBUTtvQkFBVSxBQUNWLEFBQ1Y7c0JBSk4sQUFFRSxBQUF3QixBQUVSO0FBRlEsQUFDcEI7QUFESixPQUZGLEVBUkYsQUFRRSxBQU9FLGVBRUYsQUFBUSxRQUFSLEFBQWdCLGNBQWMsVUFBOUIsQUFBd0M7O29CQUM1QixBQUNFLEFBQ1Y7c0JBMUNSLEFBQU8sQUFzQkwsQUFpQkUsQUFBb0QsQUFDeEMsQUFFSSxBQUtyQjtBQVBpQixBQUNSO0FBRmdELEFBQ2xELE9BREY7QUFsRFIsQUFBdUMsQUFBQyxBQTREeEM7QUE1RHdDLEFBQ3RDLEdBRHFDO1NBNER2QyxBQUFPLEFBQ1I7QUFyRWdCLENBQUEsQ0FxRWYsV0FyRUYsQUFBaUIsQUFxRUo7O0FBRWIsUUFBQSxBQUFRLFVBQVIsQUFBa0IiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3RrL3Byb2plY3RzL2pvYi1hZG1pbiJ9