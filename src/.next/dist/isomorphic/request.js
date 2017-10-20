'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _formData = require('form-data');

var _formData2 = _interopRequireDefault(_formData);

var _urlJoin = require('url-join');

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _queryString = require('query-string');

var _compose = require('lodash/fp/compose');

var _compose2 = _interopRequireDefault(_compose);

var _config = require('../config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var addFormData = function addFormData(formData, options) {
  var form = new _formData2.default();
  (0, _entries2.default)(formData).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (typeof value === 'undefined') {
      throw new Error('Form data ' + key + ' is undefined');
    }
    form.append(key, value);
  });
  return (0, _extends3.default)({}, options, {
    body: form,
    headers: (0, _extends3.default)({}, options && options.headers, form.getHeaders())
  });
};

var addJson = function addJson(body, options) {
  try {
    return (0, _extends3.default)({}, options, {
      body: (0, _stringify2.default)(body),
      headers: (0, _extends3.default)({}, options.headers, {
        'Content-Type': 'application/json'
      })
    });
  } catch (error) {
    throw new Error('Invalid JSON in body');
  }
};

var addAuth = function addAuth(authToken) {
  return function (options) {
    if (!authToken) {
      return options;
    }
    return (0, _extends3.default)({}, options, {
      headers: (0, _extends3.default)({}, options && options.headers, {
        Authorization: 'Bearer ' + authToken
      })
    });
  };
};

var addBody = function addBody(body) {
  return function (options) {
    if (!body || body.queryString) {
      return options;
    }
    var formData = body.formData;

    if (formData) {
      return addFormData(formData);
    }
    return addJson(body, options);
  };
};

var addDefaults = function addDefaults(options) {
  return (0, _extends3.default)({
    method: 'GET'
  }, options, {
    headers: (0, _extends3.default)({}, options && options.headers)
  });
};

var buildOptions = function buildOptions(body, authToken) {
  return (0, _compose2.default)(addAuth(authToken), addBody(body), addDefaults);
};

var buildUrl = function buildUrl(url, body) {
  var query = body && body.queryString ? '?' + (0, _queryString.stringify)(body.queryString) : '';
  return (/^https?:\/\//.test(url) ? (0, _urlJoin2.default)(url, query) : (0, _urlJoin2.default)(_config.baseUrl, url, query)
  );
};

var getResponseData = function getResponseData(response) {
  var contentType = response.headers.get('Content-Type');
  if (/text|xml|html/.test(contentType)) {
    return response.text();
  }
  return response.json();
};

var handleError = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(response) {
    var data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getResponseData(response);

          case 2:
            data = _context.sent;
            return _context.abrupt('return', typeof data === 'string' ? data : data.error);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function handleError(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var request = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(url, body, authToken, options) {
    var requestOptions, requestUrl, response;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            requestOptions = buildOptions(body, authToken)(options);
            requestUrl = buildUrl(url, body);
            _context2.next = 5;
            return (0, _isomorphicFetch2.default)(requestUrl, requestOptions);

          case 5:
            response = _context2.sent;

            if (!response.ok) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt('return', getResponseData(response));

          case 8:
            _context2.t0 = Error;
            _context2.next = 11;
            return handleError(response);

          case 11:
            _context2.t1 = _context2.sent;
            throw new _context2.t0(_context2.t1);

          case 15:
            _context2.prev = 15;
            _context2.t2 = _context2['catch'](0);
            throw new Error(_context2.t2.message);

          case 18:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 15]]);
  }));

  return function request(_x2, _x3, _x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

['get', 'post', 'put', 'patch', 'delete'].forEach(function (method) {
  request[method] = function createMethod(url, body, token, options) {
    return request(url, body, token, (0, _extends3.default)({}, options, { method: method.toUpperCase() }));
  };
});

exports.default = request;