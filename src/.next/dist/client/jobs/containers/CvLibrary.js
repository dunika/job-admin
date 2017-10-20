'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../shared/utils');

var _store = require('../store');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CVLibrary = function CVLibrary(_ref) {
  var addJobs = _ref.addJobs,
      isLoading = _ref.isLoading;
  return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'CV Library'), _react2.default.createElement('div', null, _react2.default.createElement('button', { disabled: isLoading, onClick: addJobs }, isLoading ? 'Adding jobs...' : 'Add Jobs to Database')));
};

exports.default = (0, _utils.connectReselect)({
  isLoading: _store.selectors.isLoading
}, {
  addJobs: _store.actions.addCvLibraryJobs
})(CVLibrary);