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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvaXNvbW9ycGhpYy9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX3JlZ2VuZXJhdG9yIiwicmVxdWlyZSIsIl9yZWdlbmVyYXRvcjIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX2FzeW5jVG9HZW5lcmF0b3IzIiwiX3N0cmluZ2lmeSIsIl9zdHJpbmdpZnkyIiwiX2V4dGVuZHMyIiwiX2V4dGVuZHMzIiwiX3NsaWNlZFRvQXJyYXkyIiwiX3NsaWNlZFRvQXJyYXkzIiwiX2VudHJpZXMiLCJfZW50cmllczIiLCJfaXNvbW9ycGhpY0ZldGNoIiwiX2lzb21vcnBoaWNGZXRjaDIiLCJfZm9ybURhdGEiLCJfZm9ybURhdGEyIiwiX3VybEpvaW4iLCJfdXJsSm9pbjIiLCJfcXVlcnlTdHJpbmciLCJfY29tcG9zZSIsIl9jb21wb3NlMiIsIl9jb25maWciLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImFkZEZvcm1EYXRhIiwiZm9ybURhdGEiLCJvcHRpb25zIiwiZm9ybSIsImZvckVhY2giLCJfcmVmIiwiX3JlZjIiLCJrZXkiLCJFcnJvciIsImFwcGVuZCIsImJvZHkiLCJoZWFkZXJzIiwiZ2V0SGVhZGVycyIsImFkZEpzb24iLCJlcnJvciIsImFkZEF1dGgiLCJhdXRoVG9rZW4iLCJBdXRob3JpemF0aW9uIiwiYWRkQm9keSIsInF1ZXJ5U3RyaW5nIiwiYWRkRGVmYXVsdHMiLCJtZXRob2QiLCJidWlsZE9wdGlvbnMiLCJidWlsZFVybCIsInVybCIsInF1ZXJ5Iiwic3RyaW5naWZ5IiwidGVzdCIsImJhc2VVcmwiLCJnZXRSZXNwb25zZURhdGEiLCJyZXNwb25zZSIsImNvbnRlbnRUeXBlIiwiZ2V0IiwidGV4dCIsImpzb24iLCJoYW5kbGVFcnJvciIsIl9yZWYzIiwibWFyayIsIl9jYWxsZWUiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwidW5kZWZpbmVkIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsInJlcXVlc3QiLCJfcmVmNCIsIl9jYWxsZWUyIiwicmVxdWVzdE9wdGlvbnMiLCJyZXF1ZXN0VXJsIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwib2siLCJ0MCIsInQxIiwidDIiLCJtZXNzYWdlIiwiX3gyIiwiX3gzIiwiX3g0IiwiX3g1IiwiY3JlYXRlTWV0aG9kIiwidG9rZW4iLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsT0FBQSxBQUFPLGVBQVAsQUFBc0IsU0FBdEIsQUFBK0I7U0FBL0IsQUFBNkMsQUFDcEM7QUFEb0MsQUFDM0M7O0FBR0YsSUFBSSxlQUFKLEFBQUksQUFBZTs7QUFFbkIsSUFBSSxnQkFBZ0IsdUJBQXBCLEFBQW9CLEFBQXVCOztBQUUzQyxJQUFJLHFCQUFKLEFBQUksQUFBcUI7O0FBRXpCLElBQUkscUJBQXFCLHVCQUF6QixBQUF5QixBQUF1Qjs7QUFFaEQsSUFBSSxhQUFKLEFBQUksQUFBYTs7QUFFakIsSUFBSSxjQUFjLHVCQUFsQixBQUFrQixBQUF1Qjs7QUFFekMsSUFBSSxZQUFKLEFBQUksQUFBWTs7QUFFaEIsSUFBSSxZQUFZLHVCQUFoQixBQUFnQixBQUF1Qjs7QUFFdkMsSUFBSSxrQkFBSixBQUFJLEFBQWtCOztBQUV0QixJQUFJLGtCQUFrQix1QkFBdEIsQUFBc0IsQUFBdUI7O0FBRTdDLElBQUksV0FBSixBQUFJLEFBQVc7O0FBRWYsSUFBSSxZQUFZLHVCQUFoQixBQUFnQixBQUF1Qjs7QUFFdkMsSUFBSSxtQkFBSixBQUFJLEFBQW1COztBQUV2QixJQUFJLG9CQUFvQix1QkFBeEIsQUFBd0IsQUFBdUI7O0FBRS9DLElBQUksWUFBSixBQUFJLEFBQVk7O0FBRWhCLElBQUksYUFBYSx1QkFBakIsQUFBaUIsQUFBdUI7O0FBRXhDLElBQUksV0FBSixBQUFJLEFBQVc7O0FB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QU8sVUFsQ1gsQUFrQ0ksQUFBTyxBQUFVLEFBRXRCOztBQUNGO0FBdkNNLEtBQUEsRUFBQSxBQXVDSixVQXZDSSxBQXVDTSxXQUFXLENBQUMsQ0FBQSxBQUFDLEdBdkMxQixBQUFPLEFBdUNpQixBQUFDLEFBQUksQUFDOUI7QUExQ0QsQUFBWSxBQUE4QyxBQTRDMUQsR0E1QzBELENBQTlDOztTQTRDTCxTQUFBLEFBQVMsUUFBVCxBQUFpQixLQUFqQixBQUFzQixLQUF0QixBQUEyQixLQUEzQixBQUFnQyxLQUFLLEFBQzFDO1dBQU8sTUFBQSxBQUFNLE1BQU4sQUFBWSxNQUFuQixBQUFPLEFBQWtCLEFBQzFCO0FBRkQsQUFHRDtBQWhERCxBQUFjLENBQUE7O0FBa0RkLENBQUEsQUFBQyxPQUFELEFBQVEsUUFBUixBQUFnQixPQUFoQixBQUF1QixTQUF2QixBQUFnQyxVQUFoQyxBQUEwQyxRQUFRLFVBQUEsQUFBVSxRQUFRLEFBQ2xFO1VBQUEsQUFBUSxVQUFVLFNBQUEsQUFBUyxhQUFULEFBQXNCLEtBQXRCLEFBQTJCLE1BQTNCLEFBQWlDLE9BQWpDLEFBQXdDLFNBQVMsQUFDakU7V0FBTyxRQUFBLEFBQVEsS0FBUixBQUFhLE1BQWIsQUFBbUIsT0FBTyxDQUFDLEdBQUcsVUFBSixBQUFjLFNBQWQsQUFBdUIsSUFBdkIsQUFBMkIsU0FBUyxFQUFFLFFBQVEsT0FBL0UsQUFBTyxBQUEwQixBQUFvQyxBQUFVLEFBQU8sQUFDdkY7QUFGRCxBQUdEO0FBSkQ7O0FBTUEsUUFBQSxBQUFRLFVBQVIsQUFBa0IiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90ay9wcm9qZWN0cy9qb2ItYWRtaW4ifQ==