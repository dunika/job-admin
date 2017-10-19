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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents2.default.div(_templateObject);

var Filters = function Filters(_ref) {
  var postedFilter = _ref.postedFilter,
      locationFilter = _ref.locationFilter,
      togglePostedFilter = _ref.togglePostedFilter,
      setLocationFilter = _ref.setLocationFilter;
  return _react2.default.createElement(
    Container,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    },
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      },
      'Filters'
    ),
    _react2.default.createElement(
      _components.Flex,
      { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      },
      _react2.default.createElement(_components.Checkbox, {
        label: 'Posted to Wordpress',
        size: 'small',
        checked: postedFilter,
        onChange: togglePostedFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })
    ),
    _react2.default.createElement('input', {
      placeholder: 'Search location...',
      onChange: function onChange(_ref2) {
        var value = _ref2.target.value;
        return setLocationFilter(value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    })
  );
};

exports.default = (0, _utils.connectReselect)({
  postedFilter: _store.selectors.postedFilter,
  locationFilter: _store.selectors.locationFilter
}, {
  togglePostedFilter: _store.actions.togglePostedFilter,
  setLocationFilter: _store.actions.setLocationFilter
})(Filters);