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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Container = _styledComponents2.default.div(_templateObject);

var Content = _styledComponents2.default.div(_templateObject2);

var Header = _styledComponents2.default.div(_templateObject3);

var HeaderLink = (0, _styledComponents2.default)(_components.Link)(_templateObject4);

var Main = function Main(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(HeaderLink, { to: '/', shallow: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Jobs'), _react2.default.createElement(HeaderLink, { to: '/cv-library', shallow: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'CV Library'), _react2.default.createElement(HeaderLink, { to: '/indeed', shallow: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Indeed')), _react2.default.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, children));
};

exports.default = Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvcGFnZXMvbGF5b3V0L01haW4uanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsInJlcXVpcmUiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfanN4RmlsZU5hbWUiLCJfdGVtcGxhdGVPYmplY3QiLCJkZWZhdWx0IiwiX3RlbXBsYXRlT2JqZWN0MiIsIl90ZW1wbGF0ZU9iamVjdDMiLCJfdGVtcGxhdGVPYmplY3Q0IiwiX3JlYWN0IiwiX3JlYWN0MiIsIl9zdHlsZWRDb21wb25lbnRzIiwiX3N0eWxlZENvbXBvbmVudHMyIiwiX2NvbXBvbmVudHMiLCJvYmoiLCJfX2VzTW9kdWxlIiwiQ29udGFpbmVyIiwiZGl2IiwiQ29udGVudCIsIkhlYWRlciIsIkhlYWRlckxpbmsiLCJMaW5rIiwiTWFpbiIsIl9yZWYiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsInRvIiwic2hhbGxvdyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsT0FBQSxBQUFPLGVBQVAsQUFBc0IsU0FBdEIsQUFBK0I7U0FBL0IsQUFBNkMsQUFDcEM7QUFEb0MsQUFDM0M7O0FBR0YsSUFBSSwwQkFBSixBQUFJLEFBQTBCOztBQUU5QixJQUFJLDBCQUEwQix1QkFBOUIsQUFBOEIsQUFBdUI7O0FBRXJELElBQUksZUFBSixBQUFtQjs7QUFFbkIsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLHdCQUFKLEFBQTRCLFNBQVMsQ0FBckMsQUFBcUMsQUFBQyxLQUFLLENBQWpFLEFBQXNCLEFBQTJDLEFBQUM7SUFDOUQsbUJBQW1CLENBQUMsR0FBRyx3QkFBSixBQUE0QixTQUFTLENBQXJDLEFBQXFDLEFBQUMsOEJBQThCLENBRDNGLEFBQ3VCLEFBQW9FLEFBQUM7SUFDeEYsbUJBQW1CLENBQUMsR0FBRyx3QkFBSixBQUE0QixTQUFTLENBQXJDLEFBQXFDLEFBQUMsNERBQTRELENBRnpILEFBRXVCLEFBQWtHLEFBQUM7SUFDdEgsbUJBQW1CLENBQUMsR0FBRyx3QkFBSixBQUE0QixTQUFTLENBQXJDLEFBQXFDLEFBQUMsaURBQWlELENBSDlHLEFBR3VCLEFBQXVGLEFBQUM7O0FBRS9HLElBQUksU0FBSixBQUFJLEFBQVM7O0FBRWIsSUFBSSxVQUFVLHVCQUFkLEFBQWMsQUFBdUI7O0FBRXJDLElBQUksb0JBQUosQUFBSSxBQUFvQjs7QUFFeEIsSUFBSSxxQkFBcUIsdUJBQXpCLEFBQXlCLEFBQXVCOztBQUVoRCxJQUFJLGNBQUosQUFBa0I7O0FBRWxCLFNBQUEsQUFBUyx1QkFBVCxBQUFnQyxLQUFLLEFBQUU7U0FBTyxPQUFPLElBQVAsQUFBVyxhQUFYLEFBQXdCLE1BQU0sRUFBRSxTQUF2QyxBQUFxQyxBQUFXLEFBQVE7OztBQUUvRixJQUFJLFlBQVksbUJBQUEsQUFBbUIsUUFBbkIsQUFBMkIsSUFBM0MsQUFBZ0IsQUFBK0I7O0FBRS9DLElBQUksVUFBVSxtQkFBQSxBQUFtQixRQUFuQixBQUEyQixJQUF6QyxBQUFjLEFBQStCOztBQUU3QyxJQUFJLFNBQVMsbUJBQUEsQUFBbUIsUUFBbkIsQUFBMkIsSUFBeEMsQUFBYSxBQUErQjs7QUFFNUMsSUFBSSxhQUFhLENBQUMsR0FBRyxtQkFBSixBQUF1QixTQUFTLFlBQWhDLEFBQTRDLE1BQTdELEFBQWlCLEFBQWtEOztBQUVuRSxJQUFJLE9BQU8sU0FBQSxBQUFTLEtBQVQsQUFBYyxNQUFNLEFBQzdCO01BQUksV0FBVyxLQUFmLEFBQW9CLEFBQ3BCO2lCQUFPLEFBQVEsUUFBUixBQUFnQixjQUFoQixBQUNMOztnQkFFWSxBQUNFLEFBQ1Y7a0JBTEMsQUFFTCxBQUNZLEFBRUk7QUFGSixBQUNSO0FBRkosQUFDRSxHQUhHLFVBUUwsQUFBUSxRQUFSLEFBQWdCLGNBQWhCLEFBQ0U7O2dCQUVZLEFBQ0UsQUFDVjtrQkFMTixBQUVFLEFBQ1ksQUFFSTtBQUZKLEFBQ1I7QUFGSixBQUNFLEdBSEosVUFRRSxBQUFRLFFBQVIsQUFBZ0IsY0FBaEIsQUFDRSxjQUNFLElBQUYsQUFBTSxLQUFLLFNBQVgsQUFBb0IsTUFBTTtnQkFBVSxBQUN0QixBQUNWO2tCQUpOLEFBRUUsQUFBb0MsQUFFcEI7QUFGb0IsQUFDaEM7QUFESixHQUZGLEVBUkYsQUFRRSxBQU9FLGlCQUVGLEFBQVEsUUFBUixBQUFnQixjQUFoQixBQUNFLGNBQ0UsSUFBRixBQUFNLGVBQWUsU0FBckIsQUFBOEIsTUFBTTtnQkFBVSxBQUNoQyxBQUNWO2tCQUpOLEFBRUUsQUFBOEMsQUFFOUI7QUFGOEIsQUFDMUM7QUFESixHQUZGLEVBakJGLEFBaUJFLEFBT0UsdUJBRUYsQUFBUSxRQUFSLEFBQWdCLGNBQWhCLEFBQ0UsY0FDRSxJQUFGLEFBQU0sV0FBVyxTQUFqQixBQUEwQixNQUFNO2dCQUFVLEFBQzVCLEFBQ1Y7a0JBSk4sQUFFRSxBQUEwQyxBQUUxQjtBQUYwQixBQUN0QztBQURKLEdBRkYsRUFsQ0csQUFRTCxBQTBCRSxBQU9FLG9CQUdKLEFBQVEsUUFBUixBQUFnQixjQUFoQixBQUNFOztnQkFFWSxBQUNFLEFBQ1Y7a0JBTE4sQUFFRSxBQUNZLEFBRUk7QUFGSixBQUNSO0FBRkosQUFDRSxHQUhKLEVBNUNGLEFBQU8sQUE0Q0wsQUFRRSxBQUdMO0FBekREOztBQTJEQSxRQUFBLEFBQVEsVUFBUixBQUFrQiIsImZpbGUiOiJNYWluLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RrL3Byb2plY3RzL2pvYi1hZG1pbiJ9