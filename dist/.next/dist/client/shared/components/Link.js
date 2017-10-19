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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var A = _styledComponents2.default.a(_templateObject);

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      otherProps = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className']);
  return _react2.default.createElement(_routes.Link, (0, _extends3.default)({}, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(A, { href: otherProps.to, className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, children));
};

exports.default = Link;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L3NoYXJlZC9jb21wb25lbnRzL0xpbmsuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfZXh0ZW5kczIiLCJyZXF1aXJlIiwiX2V4dGVuZHMzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllczIiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzIiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbDIiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMyIsIl9qc3hGaWxlTmFtZSIsIl90ZW1wbGF0ZU9iamVjdCIsImRlZmF1bHQiLCJfcmVhY3QiLCJfcmVhY3QyIiwiX3JvdXRlcyIsIl9zdHlsZWRDb21wb25lbnRzIiwiX3N0eWxlZENvbXBvbmVudHMyIiwib2JqIiwiX19lc01vZHVsZSIsIkEiLCJhIiwiTGluayIsIl9yZWYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm90aGVyUHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJocmVmIiwidG8iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE9BQUEsQUFBTyxlQUFQLEFBQXNCLFNBQXRCLEFBQStCO1NBQS9CLEFBQTZDLEFBQ3BDO0FBRG9DLEFBQzNDOztBQUdGLElBQUksWUFBSixBQUFJLEFBQVk7O0FBRWhCLElBQUksWUFBWSx1QkFBaEIsQUFBZ0IsQUFBdUI7O0FBRXZDLElBQUksNEJBQUosQUFBSSxBQUE0Qjs7QUFFaEMsSUFBSSw0QkFBNEIsdUJBQWhDLEFBQWdDLEFBQXVCOztBQUV2RCxJQUFJLDBCQUFKLEFBQUksQUFBMEI7O0FBRTlCLElBQUksMEJBQTBCLHVCQUE5QixBQUE4QixBQUF1Qjs7QUFFckQsSUFBSSxlQUFKLEFBQW1COztBQUVuQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsd0JBQUosQUFBNEIsU0FBUyxDQUFyQyxBQUFxQyxBQUFDLG9GQUFvRixDQUFoSixBQUFzQixBQUEwSCxBQUFDOztBQUVqSixJQUFJLFNBQUosQUFBSSxBQUFTOztBQUViLElBQUksVUFBVSx1QkFBZCxBQUFjLEFBQXVCOztBQUVyQyxJQUFJLFVBQUosQUFBYzs7QUFFZCxJQUFJLG9CQUFKLEFBQUksQUFBb0I7O0FBRXhCLElBQUkscUJBQXFCLHVCQUF6QixBQUF5QixBQUF1Qjs7QUFFaEQsU0FBQSxBQUFTLHVCQUFULEFBQWdDLEtBQUssQUFBRTtTQUFPLE9BQU8sSUFBUCxBQUFXLGFBQVgsQUFBd0IsTUFBTSxFQUFFLFNBQXZDLEFBQXFDLEFBQVcsQUFBUTs7O0FBRS9GLElBQUksSUFBSSxtQkFBQSxBQUFtQixRQUFuQixBQUEyQixFQUFuQyxBQUFRLEFBQTZCOztBQUVyQyxJQUFJLE9BQU8sU0FBQSxBQUFTLEtBQVQsQUFBYyxNQUFNLEFBQzdCO01BQUksV0FBVyxLQUFmLEFBQW9CO01BQ2hCLFlBQVksS0FEaEIsQUFDcUI7TUFDakIsYUFBYSxDQUFDLEdBQUcsMEJBQUosQUFBOEIsU0FBOUIsQUFBdUMsTUFBTSxDQUFBLEFBQUMsWUFGL0QsQUFFaUIsQUFBNkMsQUFBYSxBQUMzRTtpQkFBTyxBQUFRLFFBQVIsQUFBZ0IsY0FDckIsUUFESyxBQUNHLE9BQ1AsR0FBRyxVQUFKLEFBQWMsU0FBZCxBQUF1QixJQUF2QixBQUEyQjs7Z0JBQ2YsQUFDRSxBQUNWO2tCQUxDLEFBRUwsQUFBdUMsQUFDM0IsQUFFSTtBQUZKLEFBQ1I7QUFGbUMsQUFDckMsR0FERixDQUZLLFVBUUwsQUFBUSxRQUFSLEFBQWdCLGNBQWhCLEFBQ0UsS0FDRSxNQUFNLFdBQVIsQUFBbUIsSUFBSSxXQUF2QixBQUFrQyxXQUFXO2dCQUFVLEFBQ3pDLEFBQ1Y7a0JBSk4sQUFFRSxBQUF1RCxBQUV2QztBQUZ1QyxBQUNuRDtBQURKLEdBRkYsRUFSRixBQUFPLEFBUUwsQUFPRSxBQUdMO0FBdEJEOztBQXdCQSxRQUFBLEFBQVEsVUFBUixBQUFrQiIsImZpbGUiOiJMaW5rLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RrL3Byb2plY3RzL2pvYi1hZG1pbiJ9