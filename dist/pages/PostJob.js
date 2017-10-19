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

var _jsxFileName = 'src/pages/PostJob.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _indeed = require('../client/indeed');

var _store = require('../client/shared/store');

var _layout = require('./layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostJob = function (_Component) {
  (0, _inherits3.default)(PostJob, _Component);

  function PostJob() {
    (0, _classCallCheck3.default)(this, PostJob);
    return (0, _possibleConstructorReturn3.default)(this, (PostJob.__proto__ || (0, _getPrototypeOf2.default)(PostJob)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostJob, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _layout.Main,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        _react2.default.createElement(_indeed.PostJob, { job: this.props.job, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var id = _ref.query.id;

      return { id: id };
    }
  }]);
  return PostJob;
}(_react.Component);

exports.default = (0, _store.withReduxSaga)(PostJob, function (_ref2, _ref3) {
  var data = _ref2.indeed.data;
  var id = _ref3.id;
  return { job: data[id] };
});