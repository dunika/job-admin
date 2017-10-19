'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/client/jobs/containers/CvLibrary.js';

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
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'CV Library'), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('button', { disabled: isLoading, onClick: addJobs, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, isLoading ? 'Adding jobs...' : 'Add Jobs to Database')));
};

exports.default = (0, _utils.connectReselect)({
  isLoading: _store.selectors.isLoading
}, {
  addJobs: _store.actions.addCvLibraryJobs
})(CVLibrary);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2pvYnMvY29udGFpbmVycy9DdkxpYnJhcnkuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfanN4RmlsZU5hbWUiLCJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfdXRpbHMiLCJfc3RvcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkNWTGlicmFyeSIsIl9yZWYiLCJhZGRKb2JzIiwiaXNMb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiY29ubmVjdFJlc2VsZWN0Iiwic2VsZWN0b3JzIiwiYWN0aW9ucyIsImFkZEN2TGlicmFyeUpvYnMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE9BQUEsQUFBTyxlQUFQLEFBQXNCLFNBQXRCLEFBQStCO1NBQS9CLEFBQTZDLEFBQ3BDO0FBRG9DLEFBQzNDO0FBRUYsSUFBSSxlQUFKLEFBQW1COztBQUVuQixJQUFJLFNBQUosQUFBSSxBQUFTOztBQUViLElBQUksVUFBVSx1QkFBZCxBQUFjLEFBQXVCOztBQUVyQyxJQUFJLFNBQUosQUFBYTs7QUFFYixJQUFJLFNBQUosQUFBYTs7QUFFYixTQUFBLEFBQVMsdUJBQVQsQUFBZ0MsS0FBSyxBQUFFO1NBQU8sT0FBTyxJQUFQLEFBQVcsYUFBWCxBQUF3QixNQUFNLEVBQUUsU0FBdkMsQUFBcUMsQUFBVyxBQUFROzs7QUFFL0YsSUFBSSxZQUFZLFNBQUEsQUFBUyxVQUFULEFBQW1CLE1BQU0sQUFDdkM7TUFBSSxVQUFVLEtBQWQsQUFBbUI7TUFDZixZQUFZLEtBRGhCLEFBQ3FCLEFBQ3JCO2lCQUFPLEFBQVEsUUFBUixBQUFnQixjQUFoQixBQUNMOztnQkFFWSxBQUNFLEFBQ1Y7a0JBTEMsQUFFTCxBQUNZLEFBRUk7QUFGSixBQUNSO0FBRkosQUFDRSxHQUhHLFVBUUwsQUFBUSxRQUFSLEFBQWdCLGNBQWhCLEFBQ0U7O2dCQUVZLEFBQ0UsQUFDVjtrQkFMTixBQUVFLEFBQ1ksQUFFSTtBQUZKLEFBQ1I7QUFGSixBQUNFLEdBSEosRUFSSyxBQVFMLEFBUUUsdUJBRUYsQUFBUSxRQUFSLEFBQWdCLGNBQWhCLEFBQ0U7O2dCQUVZLEFBQ0UsQUFDVjtrQkFMTixBQUVFLEFBQ1ksQUFFSTtBQUZKLEFBQ1I7QUFGSixBQUNFLEdBSEosVUFRRSxBQUFRLFFBQVIsQUFBZ0IsY0FBaEIsQUFDRSxZQUNFLFVBQUYsQUFBWSxXQUFXLFNBQXZCLEFBQWdDLFNBQVM7Z0JBQVUsQUFDckMsQUFDVjtrQkFKTixBQUVFLEFBQW1ELEFBRW5DO0FBRm1DLEFBQy9DO0FBREosR0FGRixFQU9FLFlBQUEsQUFBWSxtQkFqQ2xCLEFBQU8sQUFrQkwsQUFRRSxBQU9pQyxBQUl0QztBQXhDRDs7QUEwQ0EsUUFBQSxBQUFRLFdBQVcsR0FBRyxPQUFKLEFBQVc7YUFDaEIsT0FBQSxBQUFPLFVBREYsQUFBNEIsQUFDaEI7QUFEZ0IsQUFDNUMsQ0FEZ0I7V0FHUCxPQUFBLEFBQU8sUUFIQSxBQUVmLEFBQ3VCO0FBRHZCLEFBQ0QsR0FIRixBQUFrQixBQUlmIiwiZmlsZSI6IkN2TGlicmFyeS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90ay9wcm9qZWN0cy9qb2ItYWRtaW4ifQ==