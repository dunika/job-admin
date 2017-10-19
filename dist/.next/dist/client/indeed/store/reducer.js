'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _reduxActions = require('redux-actions');

var _utils = require('../../shared/utils');

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
  data: null,
  error: null,
  isLoading: false
};
'ea926c2be8d4f250';
exports.default = (0, _reduxActions.handleActions)((0, _extends4.default)({}, (0, _utils.createAsyncLeaf)(_actions2.default.search, function (state, _ref) {
  var payload = _ref.payload;
  return {
    data: payload
  };
}), (0, _utils.createAsyncLeaf)(_actions2.default.addJobToWordpress, function (_ref2, _ref3) {
  var data = _ref2.data;
  var payload = _ref3.payload;
  return {
    data: (0, _extends4.default)({}, data, (0, _defineProperty3.default)({}, payload[0].sourceId, payload[0]))
  };
})), initialState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2luZGVlZC9zdG9yZS9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2RlZmluZVByb3BlcnR5MiIsInJlcXVpcmUiLCJfZGVmaW5lUHJvcGVydHkzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9leHRlbmRzMyIsIl9leHRlbmRzNCIsIl9yZWR1eEFjdGlvbnMiLCJfdXRpbHMiLCJfYWN0aW9ucyIsIl9hY3Rpb25zMiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiaW5pdGlhbFN0YXRlIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwiaGFuZGxlQWN0aW9ucyIsImNyZWF0ZUFzeW5jTGVhZiIsInNlYXJjaCIsInN0YXRlIiwiX3JlZiIsInBheWxvYWQiLCJhZGRKb2JUb1dvcmRwcmVzcyIsIl9yZWYyIiwiX3JlZjMiLCJzb3VyY2VJZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsT0FBQSxBQUFPLGVBQVAsQUFBc0IsU0FBdEIsQUFBK0I7U0FBL0IsQUFBNkMsQUFDcEM7QUFEb0MsQUFDM0M7O0FBR0YsSUFBSSxtQkFBSixBQUFJLEFBQW1COztBQUV2QixJQUFJLG1CQUFtQix1QkFBdkIsQUFBdUIsQUFBdUI7O0FBRTlDLElBQUksWUFBSixBQUFJLEFBQVk7O0FBRWhCLElBQUksWUFBWSx1QkFBaEIsQUFBZ0IsQUFBdUI7O0FBRXZDLElBQUksZ0JBQUosQUFBSSxBQUFnQjs7QUFFcEIsSUFBSSxTQUFKLEFBQWE7O0FBRWIsSUFBSSxXQUFKLEFBQWU7O0FBRWYsSUFBSSxZQUFZLHVCQUFoQixBQUFnQixBQUF1Qjs7QUFFdkMsU0FBQSxBQUFTLHVCQUFULEFBQWdDLEtBQUssQUFBRTtTQUFPLE9BQU8sSUFBUCxBQUFXLGFBQVgsQUFBd0IsTUFBTSxFQUFFLFNBQXZDLEFBQXFDLEFBQVcsQUFBUTs7O0FBRS9GLElBQUk7UUFBZSxBQUNYLEFBQ047U0FGaUIsQUFFVixBQUNQO2FBSEYsQUFBbUIsQUFHTjtBQUhNLEFBQ2pCO0FBSUY7QUFDQSxRQUFBLEFBQVEsV0FBVyxHQUFHLGNBQUosQUFBa0IsZ0JBQWdCLEdBQUcsVUFBSixBQUFjLFNBQWQsQUFBdUIsS0FBSyxHQUFHLE9BQUosQUFBVyxpQkFBaUIsVUFBQSxBQUFVLFFBQXRDLEFBQThDLFFBQVEsVUFBQSxBQUFVLE9BQVYsQUFBaUIsTUFBTSxBQUN6SjtNQUFJLFVBQVUsS0FBZCxBQUFtQixBQUNuQjs7VUFBQSxBQUFPLEFBQ0MsQUFFVDtBQUhRLEFBQ0w7QUFIK0MsQUFBMkIsQ0FBQSxDQUEzQixHQUs5QyxHQUFHLE9BQUosQUFBVyxpQkFBaUIsVUFBQSxBQUFVLFFBQXRDLEFBQThDLG1CQUFtQixVQUFBLEFBQVUsT0FBVixBQUFpQixPQUFPLEFBQzNGO01BQUksT0FBTyxNQUFYLEFBQWlCLEFBQ2pCO01BQUksVUFBVSxNQUFkLEFBQW9CLEFBQ3BCOztVQUNRLENBQUMsR0FBRyxVQUFKLEFBQWMsU0FBZCxBQUF1QixJQUF2QixBQUEyQixNQUFNLENBQUMsR0FBRyxpQkFBSixBQUFxQixTQUFyQixBQUE4QixJQUFJLFFBQUEsQUFBUSxHQUExQyxBQUE2QyxVQUFVLFFBRGhHLEFBQU8sQUFDQyxBQUFpQyxBQUF1RCxBQUFRLEFBRXpHO0FBSFEsQUFDTDtBQVRjLEFBQWlDLEFBSy9DLENBQUEsRUFMYyxFQUFsQixBQUFrQixBQVdiIiwiZmlsZSI6InJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdGsvcHJvamVjdHMvam9iLWFkbWluIn0=