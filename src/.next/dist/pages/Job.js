'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jobs = require('../client/jobs');

var _store = require('../client/shared/store');

var _layout = require('./layout');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Job = function (_Component) {
  (0, _inherits3.default)(Job, _Component);

  function Job() {
    (0, _classCallCheck3.default)(this, Job);
    return (0, _possibleConstructorReturn3.default)(this, (Job.__proto__ || (0, _getPrototypeOf2.default)(Job)).apply(this, arguments));
  }

  (0, _createClass3.default)(Job, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout.Main, null, _react2.default.createElement(_jobs.Job, { job: this.props.job, showFullDescription: true }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var _ref2$store = _ref2.store,
            dispatch = _ref2$store.dispatch,
            getState = _ref2$store.getState,
            id = _ref2.query.id;

        var _getState, data, lad;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _getState = getState(), data = _getState.jobs.data;

                if (!data) {
                  lad = dispatch(_jobs.actions.getJobs());

                  dispatch(_jobs.actions.getJobs());
                  data = getState().jobs.data;
                }
                return _context.abrupt('return', { id: id });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return Job;
}(_react.Component);

exports.default = (0, _store.withReduxSaga)(Job, function (_ref3, _ref4) {
  var data = _ref3.jobs.data;
  var id = _ref4.id;
  return { job: data[id] };
});