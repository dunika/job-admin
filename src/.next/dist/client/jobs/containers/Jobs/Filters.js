'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'Filters__Container',
  componentId: 'ydyi1g-0'
})(['padding:30px 20px;position:fixed;right:0;top:50px;']);

var Filters = function Filters(_ref) {
  var postedFilter = _ref.postedFilter,
      locationFilter = _ref.locationFilter,
      togglePostedFilter = _ref.togglePostedFilter,
      setLocationFilter = _ref.setLocationFilter;
  return _react2.default.createElement(Container, null, _react2.default.createElement('p', null, 'Filters'), _react2.default.createElement(_components.Flex, { align: 'center' }, _react2.default.createElement(_components.Checkbox, {
    label: 'Posted to Wordpress',
    size: 'small',
    checked: postedFilter,
    onChange: togglePostedFilter
  })), _react2.default.createElement('input', {
    placeholder: 'Search location...',
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return setLocationFilter(value);
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