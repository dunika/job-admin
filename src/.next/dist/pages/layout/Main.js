'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = require('../../client/shared/components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'Main__Container',
  componentId: 's1tv94jq-0'
})(['']);

var Content = _styledComponents2.default.div.withConfig({
  displayName: 'Main__Content',
  componentId: 's1tv94jq-1'
})(['padding:40px 15px;']);

var Header = _styledComponents2.default.div.withConfig({
  displayName: 'Main__Header',
  componentId: 's1tv94jq-2'
})(['background-color:#003399;padding:10px 15px;']);

var HeaderLink = (0, _styledComponents2.default)(_components.Link).withConfig({
  displayName: 'Main__HeaderLink',
  componentId: 's1tv94jq-3'
})(['color:#FFFFFF;margin-right:20px;']);

var Main = function Main(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(Container, null, _react2.default.createElement(Header, null, _react2.default.createElement(HeaderLink, { to: '/', shallow: true }, 'Jobs'), _react2.default.createElement(HeaderLink, { to: '/cv-library', shallow: true }, 'CV Library'), _react2.default.createElement(HeaderLink, { to: '/indeed', shallow: true }, 'Indeed')), _react2.default.createElement(Content, null, children));
};

exports.default = Main;