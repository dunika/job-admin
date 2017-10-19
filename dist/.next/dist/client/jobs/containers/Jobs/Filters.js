'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'src/client/jobs/containers/Jobs/Filters.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 30px 20px;\n  position: fixed;\n  right: 0;\n  top: 50px;\n'], ['\n  padding: 30px 20px;\n  position: fixed;\n  right: 0;\n  top: 50px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../../shared/utils');

var _components = require('../../../shared/components');

var _store = require('../../store');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Container = _styledComponents2.default.div(_templateObject);

var Filters = function Filters(_ref) {
  var postedFilter = _ref.postedFilter,
      locationFilter = _ref.locationFilter,
      togglePostedFilter = _ref.togglePostedFilter,
      setLocationFilter = _ref.setLocationFilter;
  return _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'Filters'), _react2.default.createElement(_components.Flex, { align: 'center', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_components.Checkbox, {
    label: 'Posted to Wordpress',
    size: 'small',
    checked: postedFilter,
    onChange: togglePostedFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  })), _react2.default.createElement('input', {
    placeholder: 'Search location...',
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return setLocationFilter(value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }));
};

exports.default = (0, _utils.connectReselect)({
  postedFilter: _store.selectors.postedFilter,
  locationFilter: _store.selectors.locationFilter
}, {
  togglePostedFilter: _store.actions.togglePostedFilter,
  setLocationFilter: _store.actions.setLocationFilter
})(Filters);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2pvYnMvY29udGFpbmVycy9Kb2JzL0ZpbHRlcnMuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMiIsInJlcXVpcmUiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsMyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfanN4RmlsZU5hbWUiLCJfdGVtcGxhdGVPYmplY3QiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3JlYWN0MiIsIl9zdHlsZWRDb21wb25lbnRzIiwiX3N0eWxlZENvbXBvbmVudHMyIiwiX3V0aWxzIiwiX2NvbXBvbmVudHMiLCJfc3RvcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiQ29udGFpbmVyIiwiZGl2IiwiRmlsdGVycyIsIl9yZWYiLCJwb3N0ZWRGaWx0ZXIiLCJsb2NhdGlvbkZpbHRlciIsInRvZ2dsZVBvc3RlZEZpbHRlciIsInNldExvY2F0aW9uRmlsdGVyIiwiY3JlYXRlRWxlbWVudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiRmxleCIsImFsaWduIiwiQ2hlY2tib3giLCJsYWJlbCIsInNpemUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIl9yZWYyIiwidGFyZ2V0IiwiY29ubmVjdFJlc2VsZWN0Iiwic2VsZWN0b3JzIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsT0FBQSxBQUFPLGVBQVAsQUFBc0IsU0FBdEIsQUFBK0I7U0FBL0IsQUFBNkMsQUFDcEM7QUFEb0MsQUFDM0M7O0FBR0YsSUFBSSwwQkFBSixBQUFJLEFBQTBCOztBQUU5QixJQUFJLDBCQUEwQix1QkFBOUIsQUFBOEIsQUFBdUI7O0FBRXJELElBQUksZUFBSixBQUFtQjs7QUFFbkIsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLHdCQUFKLEFBQTRCLFNBQVMsQ0FBckMsQUFBcUMsQUFBQyw2RUFBNkUsQ0FBekksQUFBc0IsQUFBbUgsQUFBQzs7QUFFMUksSUFBSSxTQUFKLEFBQUksQUFBUzs7QUFFYixJQUFJLFVBQVUsdUJBQWQsQUFBYyxBQUF1Qjs7QUFFckMsSUFBSSxvQkFBSixBQUFJLEFBQW9COztBQUV4QixJQUFJLHFCQUFxQix1QkFBekIsQUFBeUIsQUFBdUI7O0FBRWhELElBQUksU0FBSixBQUFhOztBQUViLElBQUksY0FBSixBQUFrQjs7QUFFbEIsSUFBSSxTQUFKLEFBQWE7O0FBRWIsU0FBQSxBQUFTLHVCQUFULEFBQWdDLEtBQUssQUFBRTtTQUFPLE9BQU8sSUFBUCxBQUFXLGFBQVgsQUFBd0IsTUFBTSxFQUFFLFNBQXZDLEFBQXFDLEFBQVcsQUFBUTs7O0FBRS9GLElBQUksWUFBWSxtQkFBQSxBQUFtQixRQUFuQixBQUEyQixJQUEzQyxBQUFnQixBQUErQjs7QUFFL0MsSUFBSSxVQUFVLFNBQUEsQUFBUyxRQUFULEFBQWlCLE1BQU0sQUFDbkM7TUFBSSxlQUFlLEtBQW5CLEFBQXdCO01BQ3BCLGlCQUFpQixLQURyQixBQUMwQjtNQUN0QixxQkFBcUIsS0FGekIsQUFFOEI7TUFDMUIsb0JBQW9CLEtBSHhCLEFBRzZCLEFBQzdCO2lCQUFPLEFBQVEsUUFBUixBQUFnQixjQUFoQixBQUNMOztnQkFFWSxBQUNFLEFBQ1Y7a0JBTEMsQUFFTCxBQUNZLEFBRUk7QUFGSixBQUNSO0FBRkosQUFDRSxHQUhHLFVBUUwsQUFBUSxRQUFSLEFBQWdCLGNBQWhCLEFBQ0U7O2dCQUVZLEFBQ0UsQUFDVjtrQkFMTixBQUVFLEFBQ1ksQUFFSTtBQUZKLEFBQ1I7QUFGSixBQUNFLEdBSEosRUFSSyxBQVFMLEFBUUUsb0JBRUYsQUFBUSxRQUFSLEFBQWdCLGNBQ2QsWUFERixBQUNjLFFBQ1YsT0FBRixBQUFTLFVBQVU7Z0JBQVUsQUFDZixBQUNWO2tCQUpOLEFBRUUsQUFBNkIsQUFFYjtBQUZhLEFBQ3pCO0FBREosR0FGRixVQU9FLEFBQVEsUUFBUixBQUFnQixjQUFjLFlBQTlCLEFBQTBDO1dBQVUsQUFDM0MsQUFDUDtVQUZrRCxBQUU1QyxBQUNOO2FBSGtELEFBR3pDLEFBQ1Q7Y0FKa0QsQUFJeEMsQUFDVjs7Z0JBQVUsQUFDRSxBQUNWO2tCQWhDRCxBQWtCTCxBQU9FLEFBQW9ELEFBS3hDLEFBRUk7QUFGSixBQUNSO0FBTmdELEFBQ2xELEdBREYsWUFXRixBQUFRLFFBQVIsQUFBZ0IsY0FBaEIsQUFBOEI7aUJBQVMsQUFDeEIsQUFDYjtjQUFVLFNBQUEsQUFBUyxTQUFULEFBQWtCLE9BQU8sQUFDakM7VUFBSSxRQUFRLE1BQUEsQUFBTSxPQUFsQixBQUF5QixBQUN6QjthQUFPLGtCQUFQLEFBQU8sQUFBa0IsQUFDMUI7QUFMb0MsQUFNckM7O2dCQUFVLEFBQ0UsQUFDVjtrQkE1Q04sQUFBTyxBQW9DTCxBQUF1QyxBQU0zQixBQUVJLEFBSW5CO0FBTmUsQUFDUjtBQVBtQyxBQUNyQyxHQURGO0FBekNKOztBQXVEQSxRQUFBLEFBQVEsV0FBVyxHQUFHLE9BQUosQUFBVztnQkFDYixPQUFBLEFBQU8sVUFEdUIsQUFDYixBQUMvQjtrQkFBZ0IsT0FBQSxBQUFPLFVBRlAsQUFBNEIsQUFFWDtBQUZXLEFBQzVDLENBRGdCO3NCQUlJLE9BQUEsQUFBTyxRQUQxQixBQUNrQyxBQUNuQztxQkFBbUIsT0FBQSxBQUFPLFFBTFYsQUFHZixBQUVpQztBQUZqQyxBQUNELEdBSkYsQUFBa0IsQUFNZiIsImZpbGUiOiJGaWx0ZXJzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RrL3Byb2plY3RzL2pvYi1hZG1pbiJ9