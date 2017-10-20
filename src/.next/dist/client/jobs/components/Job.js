'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _components = require('../../shared/components');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Result = _styledComponents2.default.div.withConfig({
  displayName: 'Job__Result',
  componentId: 's1nrn945-0'
})(['margin-bottom:20px;width:500px;']);

var Title = (0, _styledComponents2.default)(_components.Link).withConfig({
  displayName: 'Job__Title',
  componentId: 's1nrn945-1'
})(['font-weight:bold;font-size:21px;margin-bottom:5px;']);

var Description = _styledComponents2.default.p.withConfig({
  displayName: 'Job__Description',
  componentId: 's1nrn945-2'
})(['white-space:pre;margin-top:5px;margin-bottom:10px;white-space:pre-line;']);

var PostedUrl = _styledComponents2.default.a.withConfig({
  displayName: 'Job__PostedUrl',
  componentId: 's1nrn945-3'
})(['display:block;margin-bottom:5px;']);

var PostedStatus = _styledComponents2.default.span.withConfig({
  displayName: 'Job__PostedStatus',
  componentId: 's1nrn945-4'
})(['display:inline-block;color:#FFF;font-weight:bold;padding:5px 15px;margin-bottom:5px;background-color:#003399;', ''], function (_ref) {
  var isPosted = _ref.isPosted;
  return isPosted && '\n    background-color: green;\n  ';
});

var Date = _styledComponents2.default.p.withConfig({
  displayName: 'Job__Date',
  componentId: 's1nrn945-5'
})(['font-size:12px;']);

var Info = _styledComponents2.default.p.withConfig({
  displayName: 'Job__Info',
  componentId: 's1nrn945-6'
})(['margin:0 10px 0 0;font-weight:bold;&:first-child{&::after{padding-left:7px;content:"|";}}']);

var CheckboxArea = _styledComponents2.default.div.withConfig({
  displayName: 'Job__CheckboxArea',
  componentId: 's1nrn945-7'
})(['cursor:pointer;margin-right:10px;', ''], function (_ref2) {
  var isSelected = _ref2.isSelected;
  return isSelected && '\n    background: red;\n  ';
});

var Source = _styledComponents2.default.a.withConfig({
  displayName: 'Job__Source',
  componentId: 's1nrn945-8'
})(['margin-right:10px;']);

var Job = function Job(_ref3) {
  var shouldOpenPostJob = _ref3.shouldOpenPostJob,
      showFullDescription = _ref3.showFullDescription,
      toggle = _ref3.toggle,
      isSelected = _ref3.isSelected,
      job = _ref3.job;
  return _react2.default.createElement(Result, null, _react2.default.createElement(_components.Flex, null, toggle && _react2.default.createElement(CheckboxArea, {
    onClick: function onClick() {
      return toggle(job._id);
    },
    isSelected: isSelected
  }, _react2.default.createElement(_components.Checkbox, {
    type: 'checkbox',
    checked: !!isSelected
  })), _react2.default.createElement('div', null, _react2.default.createElement(Title, { to: '/' + (shouldOpenPostJob ? 'post-job' : 'jobs') + '/' + job._id, shallow: true }, job.title), _react2.default.createElement(_components.Flex, null, job.company && _react2.default.createElement(Info, null, job.company), job.source === 'cv-library' && _react2.default.createElement(Info, null, 'Cv Library'), _react2.default.createElement(Info, null, job.location)), job.fullAddress && job.fullAddress !== job.location && _react2.default.createElement('p', {
    style: { fontSize: 12 }
  }, _react2.default.createElement('strong', null, 'Full address: ', job.fullAddress)), _react2.default.createElement(Description, {
    dangerouslySetInnerHTML: {
      __html: '' + (showFullDescription ? job.description : job.description.substr(0, 100) + '...')
    }
  }), job.urls.source && _react2.default.createElement(Source, {
    target: '_blank',
    href: job.urls.nonSponsoredSource || job.urls.source
  }, 'View Source'), job.urls.posted && _react2.default.createElement(PostedStatus, { isPosted: job.urls.posted }, job.urls.posted ? 'Posted' : 'Not posted'), job.urls.posted && _react2.default.createElement(PostedUrl, { target: '_blank', href: job.urls.posted }, job.urls.posted), _react2.default.createElement(Date, null, (0, _moment2.default)(job.date).format('dddd, MMMM, Do')))));
};

exports.default = Job;