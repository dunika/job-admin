'use strict';

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault2(_keys);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleArray = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _redux = require('./redux');

(0, _keys2.default)(_redux).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  (0, _defineProperty2.default)(exports, key, {
    enumerable: true,
    get: function get() {
      return _redux[key];
    }
  });
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var toggleArray = exports.toggleArray = function toggleArray(array, item) {
  var index = array.indexOf(item);
  if (index !== -1) {
    return [].concat((0, _toConsumableArray3.default)(array.slice(0, index)), (0, _toConsumableArray3.default)(array.slice(index + 1)));
  }
  return [].concat((0, _toConsumableArray3.default)(array), [item]);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L3NoYXJlZC91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJfT2JqZWN0JGRlZmluZVByb3BlcnR5IiwiX09iamVjdCRrZXlzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ0b2dnbGVBcnJheSIsInVuZGVmaW5lZCIsIl90b0NvbnN1bWFibGVBcnJheTIiLCJyZXF1aXJlIiwiX3RvQ29uc3VtYWJsZUFycmF5MyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfcmVkdXgiLCJmb3JFYWNoIiwia2V5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiYXJyYXkiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwiY29uY2F0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7QUFDUCxPQUFBLEFBQU8sZUFBUCxBQUFzQixTQUF0QixBQUErQjtTQUEvQixBQUE2QyxBQUNwQztBQURvQyxBQUMzQztBQUVGLFFBQUEsQUFBUSxjQUFSLEFBQXNCOztBQUV0QixJQUFJLHNCQUFKLEFBQUksQUFBc0I7O0FBRTFCLElBQUksc0JBQXNCLHVCQUExQixBQUEwQixBQUF1Qjs7QUFFakQsSUFBSSxTQUFKLEFBQWE7O0FBRWIsb0JBQUEsQUFBYSxRQUFiLEFBQXFCLFFBQVEsVUFBQSxBQUFVLEtBQUssQUFDMUM7TUFBSSxRQUFBLEFBQVEsYUFBYSxRQUF6QixBQUFpQyxjQUFjLEFBRS9DOztnQ0FBQSxBQUF1QixTQUF2QixBQUFnQztnQkFBSyxBQUN2QixBQUNaO1NBQUssU0FBQSxBQUFTLE1BQU0sQUFDbEI7YUFBTyxPQUFQLEFBQU8sQUFBTyxBQUNmO0FBSkgsQUFBcUMsQUFNdEM7QUFOc0MsQUFDbkM7QUFKSjs7QUFXQSxTQUFBLEFBQVMsdUJBQVQsQUFBZ0MsS0FBSyxBQUFFO1NBQU8sT0FBTyxJQUFQLEFBQVcsYUFBWCxBQUF3QixNQUFNLEVBQUUsU0FBdkMsQUFBcUMsQUFBVyxBQUFROzs7QUFFL0YsSUFBSSxjQUFjLFFBQUEsQUFBUSxjQUFjLFNBQUEsQUFBUyxZQUFULEFBQXFCLE9BQXJCLEFBQTRCLE1BQU0sQUFDeEU7TUFBSSxRQUFRLE1BQUEsQUFBTSxRQUFsQixBQUFZLEFBQWMsQUFDMUI7TUFBSSxVQUFVLENBQWQsQUFBZSxHQUFHLEFBQ2hCO1dBQU8sR0FBQSxBQUFHLE9BQU8sQ0FBQyxHQUFHLG9CQUFKLEFBQXdCLFNBQVMsTUFBQSxBQUFNLE1BQU4sQUFBWSxHQUF2RCxBQUFVLEFBQWlDLEFBQWUsU0FBUyxDQUFDLEdBQUcsb0JBQUosQUFBd0IsU0FBUyxNQUFBLEFBQU0sTUFBTSxRQUF2SCxBQUFPLEFBQW1FLEFBQWlDLEFBQW9CLEFBQ2hJO0FBQ0Q7U0FBTyxHQUFBLEFBQUcsT0FBTyxDQUFDLEdBQUcsb0JBQUosQUFBd0IsU0FBbEMsQUFBVSxBQUFpQyxRQUFRLENBQTFELEFBQU8sQUFBbUQsQUFBQyxBQUM1RDtBQU5EIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RrL3Byb2plY3RzL2pvYi1hZG1pbiJ9