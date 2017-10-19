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
  return _react2.default.createElement(_Flex2.default, { align: 'center', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(CheckboxStyled, (0, _extends3.default)({
    size: size
  }, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })), label && _react2.default.createElement(Label, { size: size, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, label));
};

exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L3NoYXJlZC9jb21wb25lbnRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2V4dGVuZHMyIiwicmVxdWlyZSIsIl9leHRlbmRzMyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwyIiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbDMiLCJfanN4RmlsZU5hbWUiLCJfdGVtcGxhdGVPYmplY3QiLCJkZWZhdWx0IiwiX3RlbXBsYXRlT2JqZWN0MiIsIl9yZWFjdCIsIl9yZWFjdDIiLCJfc3R5bGVkQ29tcG9uZW50cyIsIl9zdHlsZWRDb21wb25lbnRzMiIsIl9GbGV4IiwiX0ZsZXgyIiwib2JqIiwiX19lc01vZHVsZSIsInNpemVzIiwic21hbGwiLCJsYWJlbCIsImNoZWNrYm94IiwicmVndWxhciIsIkNoZWNrYm94U3R5bGVkIiwiaW5wdXQiLCJhdHRycyIsInR5cGUiLCJfcmVmIiwic2l6ZSIsIkxhYmVsIiwiX3JlZjIiLCJDaGVja2JveCIsIl9yZWYzIiwiX3JlZjMkc2l6ZSIsInVuZGVmaW5lZCIsIm90aGVyUHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYWxpZ24iLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsT0FBQSxBQUFPLGVBQVAsQUFBc0IsU0FBdEIsQUFBK0I7U0FBL0IsQUFBNkMsQUFDcEM7QUFEb0MsQUFDM0M7O0FBR0YsSUFBSSxZQUFKLEFBQUksQUFBWTs7QUFFaEIsSUFBSSxZQUFZLHVCQUFoQixBQUFnQixBQUF1Qjs7QUFFdkMsSUFBSSw0QkFBSixBQUFJLEFBQTRCOztBQUVoQyxJQUFJLDRCQUE0Qix1QkFBaEMsQUFBZ0MsQUFBdUI7O0FBRXZELElBQUksMEJBQUosQUFBSSxBQUEwQjs7QUFFOUIsSUFBSSwwQkFBMEIsdUJBQTlCLEFBQThCLEFBQXVCOztBQUVyRCxJQUFJLGVBQUosQUFBbUI7O0FBRW5CLElBQUksa0JBQWtCLENBQUMsR0FBRyx3QkFBSixBQUE0QixTQUFTLENBQUEsQUFBQyxRQUF0QyxBQUFxQyxBQUFTLDBCQUEwQixDQUFBLEFBQUMsUUFBL0YsQUFBc0IsQUFBd0UsQUFBUztJQUNuRyxtQkFBbUIsQ0FBQyxHQUFHLHdCQUFKLEFBQTRCLFNBQVMsQ0FBQSxBQUFDLFFBQXRDLEFBQXFDLEFBQVMsT0FBTyxDQUFBLEFBQUMsUUFEN0UsQUFDdUIsQUFBcUQsQUFBUzs7QUFFckYsSUFBSSxTQUFKLEFBQUksQUFBUzs7QUFFYixJQUFJLFVBQVUsdUJBQWQsQUFBYyxBQUF1Qjs7QUFFckMsSUFBSSxvQkFBSixBQUFJLEFBQW9COztBQUV4QixJQUFJLHFCQUFxQix1QkFBekIsQUFBeUIsQUFBdUI7O0FBRWhELElBQUksUUFBSixBQUFZOztBQUVaLElBQUksU0FBUyx1QkFBYixBQUFhLEFBQXVCOztBQUVwQyxTQUFBLEFBQVMsdUJBQVQsQUFBZ0MsS0FBSyxBQUFFO1NBQU8sT0FBTyxJQUFQLEFBQVcsYUFBWCxBQUF3QixNQUFNLEVBQUUsU0FBdkMsQUFBcUMsQUFBVyxBQUFROzs7QUFFL0YsSUFBSTs7V0FDSyxBQUNFLEFBQ1A7Y0FIUSxBQUNILEFBRUssQUFFWjtBQUpPLEFBQ0w7O1dBR08sQUFDQSxBQUNQO2NBUEosQUFBWSxBQUtELEFBRUc7QUFGSCxBQUNQO0FBTlEsQUFDVjs7QUFVRixJQUFJLG9DQUFpQixBQUFtQixRQUFuQixBQUEyQixNQUEzQixBQUFpQztRQUFqQyxBQUF1QyxBQUNwRDtBQURvRCxBQUMxRCxDQURtQixFQUFBLEFBRWxCLGlCQUFpQixVQUFBLEFBQVUsTUFBTSxBQUNsQztNQUFJLE9BQU8sS0FBWCxBQUFnQixBQUNoQjtTQUFPLE1BQUEsQUFBTSxNQUFiLEFBQW1CLEFBQ3BCO0FBTEQsQUFBcUI7O0FBT3JCLElBQUksMkJBQVEsQUFBbUIsUUFBbkIsQUFBMkIsTUFBM0IsQUFBaUMsa0JBQWtCLFVBQUEsQUFBVSxPQUFPLEFBQzlFO01BQUksT0FBTyxNQUFYLEFBQWlCLEFBQ2pCO1NBQU8sTUFBQSxBQUFNLE1BQWIsQUFBbUIsQUFDcEI7QUFIRCxBQUFZLENBQUE7O0FBS1osSUFBSSxXQUFXLFNBQUEsQUFBUyxTQUFULEFBQWtCLE9BQU8sQUFDdEM7TUFBSSxRQUFRLE1BQVosQUFBa0I7TUFDZCxhQUFhLE1BRGpCLEFBQ3VCO01BQ25CLE9BQU8sZUFBQSxBQUFlLFlBQWYsQUFBMkIsWUFGdEMsQUFFa0Q7TUFDOUMsYUFBYSxDQUFDLEdBQUcsMEJBQUosQUFBOEIsU0FBOUIsQUFBdUMsT0FBTyxDQUFBLEFBQUMsU0FIaEUsQUFHaUIsQUFBOEMsQUFBVSxBQUN6RTtpQkFBTyxBQUFRLFFBQVIsQUFBZ0IsY0FDckIsT0FESyxBQUNFLFdBQ0wsT0FBRixBQUFTLFVBQVU7Z0JBQVUsQUFDZixBQUNWO2tCQUpDLEFBRUwsQUFBNkIsQUFFYjtBQUZhLEFBQ3pCO0FBREosR0FGSyxVQU9MLEFBQVEsUUFBUixBQUFnQixjQUFoQixBQUE4QixpQkFBaUIsR0FBRyxVQUFKLEFBQWM7VUFBZCxBQUF1QixBQUM3RDtBQUQ2RCxBQUNuRSxHQUQ0QyxFQUFBLEFBRTNDOztnQkFDUyxBQUNFLEFBQ1Y7a0JBWkMsQUFPTCxBQUE4QyxBQUUvQixBQUNILEFBRUk7QUFGSixBQUNSO0FBRlcsQUFDYixJQUhGLEdBUUEsaUJBQVMsQUFBUSxRQUFSLEFBQWdCLGNBQWhCLEFBQ1AsU0FDRSxNQUFGLEFBQVEsTUFBTTtnQkFBVSxBQUNWLEFBQ1Y7a0JBSkcsQUFFUCxBQUF3QixBQUVSO0FBRlEsQUFDcEI7QUFESixHQUZPLEVBZlgsQUFBTyxBQWVJLEFBT1AsQUFHTDtBQTlCRDs7QUFnQ0EsUUFBQSxBQUFRLFVBQVIsQUFBa0IiLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdGsvcHJvamVjdHMvam9iLWFkbWluIn0=