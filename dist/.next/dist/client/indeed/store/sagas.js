'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../shared/utils');

var _isomorphic = require('../../../isomorphic');

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var search = (0, _utils.createAsyncSaga)(_actions2.default.search, _isomorphic.request.post, function (_ref) {
  var payload = _ref.payload;
  //eslint-disable-line
  return ['/api/indeed/search', payload];
});

var addJobToWordpress = (0, _utils.createAsyncSaga)(_actions2.default.addJobToWordpress, _isomorphic.request.post, function (_ref2) {
  var payload = _ref2.payload;
  //eslint-disable-line
  return ['/api/wordpress/post-job', payload];
});

exports.default = [addJobToWordpress, search];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2luZGVlZC9zdG9yZS9zYWdhcy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl91dGlscyIsInJlcXVpcmUiLCJfaXNvbW9ycGhpYyIsIl9hY3Rpb25zIiwiX2FjdGlvbnMyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0Iiwic2VhcmNoIiwiY3JlYXRlQXN5bmNTYWdhIiwicmVxdWVzdCIsInBvc3QiLCJfcmVmIiwicGF5bG9hZCIsImFkZEpvYlRvV29yZHByZXNzIiwiX3JlZjIiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE9BQUEsQUFBTyxlQUFQLEFBQXNCLFNBQXRCLEFBQStCO1NBQS9CLEFBQTZDLEFBQ3BDO0FBRG9DLEFBQzNDOztBQUdGLElBQUksU0FBSixBQUFhOztBQUViLElBQUksY0FBSixBQUFrQjs7QUFFbEIsSUFBSSxXQUFKLEFBQWU7O0FBRWYsSUFBSSxZQUFZLHVCQUFoQixBQUFnQixBQUF1Qjs7QUFFdkMsU0FBQSxBQUFTLHVCQUFULEFBQWdDLEtBQUssQUFBRTtTQUFPLE9BQU8sSUFBUCxBQUFXLGFBQVgsQUFBd0IsTUFBTSxFQUFFLFNBQXZDLEFBQXFDLEFBQVcsQUFBUTs7O0FBRS9GLElBQUksVUFBVSxHQUFHLE9BQUosQUFBVyxpQkFBaUIsVUFBQSxBQUFVLFFBQXRDLEFBQThDLFFBQVEsWUFBQSxBQUFZLFFBQWxFLEFBQTBFLE1BQU0sVUFBQSxBQUFVLE1BQU0sQUFDM0c7TUFBSSxVQUFVLEtBQWQsQUFBbUIsQUFDbkI7QUFDQTtTQUFPLENBQUEsQUFBQyxzQkFBUixBQUFPLEFBQXVCLEFBQy9CO0FBSkQsQUFBYSxDQUFBOztBQU1iLElBQUkscUJBQXFCLEdBQUcsT0FBSixBQUFXLGlCQUFpQixVQUFBLEFBQVUsUUFBdEMsQUFBOEMsbUJBQW1CLFlBQUEsQUFBWSxRQUE3RSxBQUFxRixNQUFNLFVBQUEsQUFBVSxPQUFPLEFBQ2xJO01BQUksVUFBVSxNQUFkLEFBQW9CLEFBQ3BCO0FBQ0E7U0FBTyxDQUFBLEFBQUMsMkJBQVIsQUFBTyxBQUE0QixBQUNwQztBQUpELEFBQXdCLENBQUE7O0FBTXhCLFFBQUEsQUFBUSxVQUFVLENBQUEsQUFBQyxtQkFBbkIsQUFBa0IsQUFBb0IiLCJmaWxlIjoic2FnYXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdGsvcHJvamVjdHMvam9iLWFkbWluIn0=