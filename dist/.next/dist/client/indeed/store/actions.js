'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _utils = require('../../shared/utils');

var _isomorphic = require('../../../isomorphic');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var getLocation = function getLocation(location) {
  var regex = new RegExp(location.replace(',', '').split(' ').join('|'));
  return _isomorphic.regions.find(function (region) {
    return regex.test(region);
  });
};

// TODO: Move the main normalization to server
// TODO: Rename location to region
var normalizeJobs = function normalizeJobs(data) {
  return data.reduce(function (results, _ref) {
    var snippet = _ref.snippet,
        jobtitle = _ref.jobtitle,
        formattedLocationFull = _ref.formattedLocationFull,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['snippet', 'jobtitle', 'formattedLocationFull']);
    return (0, _extends4.default)({}, results, (0, _defineProperty3.default)({}, rest.jobkey, (0, _extends4.default)({
      _id: rest.jobkey,
      source: 'indeed',
      sourceId: rest.jobkey,
      title: jobtitle,
      description: snippet,
      fullAddress: formattedLocationFull,
      location: getLocation(formattedLocationFull),
      urls: {
        nonSponsoredSource: 'https://ie.indeed.com/rc/clk?jk=' + rest.jobkey,
        source: rest.url
      }
    }, rest)));
  }, {});
};

exports.default = {
  search: (0, _utils.createAsyncAction)('SEARCH_INDEED', normalizeJobs),
  addJobToWordpress: (0, _utils.createAsyncAction)('ADD_JOB_TO_WORDPRESS')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY2xpZW50L2luZGVlZC9zdG9yZS9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2RlZmluZVByb3BlcnR5MiIsInJlcXVpcmUiLCJfZGVmaW5lUHJvcGVydHkzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9leHRlbmRzMyIsIl9leHRlbmRzNCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllczIiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzIiwiX3V0aWxzIiwiX2lzb21vcnBoaWMiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImdldExvY2F0aW9uIiwibG9jYXRpb24iLCJyZWdleCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJzcGxpdCIsImpvaW4iLCJyZWdpb25zIiwiZmluZCIsInJlZ2lvbiIsInRlc3QiLCJub3JtYWxpemVKb2JzIiwiZGF0YSIsInJlZHVjZSIsInJlc3VsdHMiLCJfcmVmIiwic25pcHBldCIsImpvYnRpdGxlIiwiZm9ybWF0dGVkTG9jYXRpb25GdWxsIiwicmVzdCIsImpvYmtleSIsIl9pZCIsInNvdXJjZSIsInNvdXJjZUlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZ1bGxBZGRyZXNzIiwidXJscyIsIm5vblNwb25zb3JlZFNvdXJjZSIsInVybCIsInNlYXJjaCIsImNyZWF0ZUFzeW5jQWN0aW9uIiwiYWRkSm9iVG9Xb3JkcHJlc3MiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE9BQUEsQUFBTyxlQUFQLEFBQXNCLFNBQXRCLEFBQStCO1NBQS9CLEFBQTZDLEFBQ3BDO0FBRG9DLEFBQzNDOztBQUdGLElBQUksbUJBQUosQUFBSSxBQUFtQjs7QUFFdkIsSUFBSSxtQkFBbUIsdUJBQXZCLEFBQXVCLEFBQXVCOztBQUU5QyxJQUFJLFlBQUosQUFBSSxBQUFZOztBQUVoQixJQUFJLFlBQVksdUJBQWhCLEFBQWdCLEFBQXVCOztBQUV2QyxJQUFJLDRCQUFKLEFBQUksQUFBNEI7O0FBRWhDLElBQUksNEJBQTRCLHVCQUFoQyxBQUFnQyxBQUF1Qjs7QUFFdkQsSUFBSSxTQUFKLEFBQWE7O0FBRWIsSUFBSSxjQUFKLEFBQWtCOztBQUVsQixTQUFBLEFBQVMsdUJBQVQsQUFBZ0MsS0FBSyxBQUFFO1NBQU8sT0FBTyxJQUFQLEFBQVcsYUFBWCxBQUF3QixNQUFNLEVBQUUsU0FBdkMsQUFBcUMsQUFBVyxBQUFROzs7QUFFL0YsSUFBSSxjQUFjLFNBQUEsQUFBUyxZQUFULEFBQXFCLFVBQVUsQUFDL0M7TUFBSSxRQUFRLElBQUEsQUFBSSxPQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLEtBQWpCLEFBQXNCLElBQXRCLEFBQTBCLE1BQTFCLEFBQWdDLEtBQWhDLEFBQXFDLEtBQTVELEFBQVksQUFBVyxBQUEwQyxBQUNqRTtxQkFBTyxBQUFZLFFBQVosQUFBb0IsS0FBSyxVQUFBLEFBQVUsUUFBUSxBQUNoRDtXQUFPLE1BQUEsQUFBTSxLQUFiLEFBQU8sQUFBVyxBQUNuQjtBQUZELEFBQU8sQUFHUixHQUhRO0FBRlQ7O0FBT0E7QUFDQTtBQUNBLElBQUksZ0JBQWdCLFNBQUEsQUFBUyxjQUFULEFBQXVCLE1BQU0sQUFDL0M7Y0FBTyxBQUFLLE9BQU8sVUFBQSxBQUFVLFNBQVYsQUFBbUIsTUFBTSxBQUMxQztRQUFJLFVBQVUsS0FBZCxBQUFtQjtRQUNmLFdBQVcsS0FEZixBQUNvQjtRQUNoQix3QkFBd0IsS0FGNUIsQUFFaUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsMEJBQUosQUFBOEIsU0FBOUIsQUFBdUMsTUFBTSxDQUFBLEFBQUMsV0FBRCxBQUFZLFlBSHBFLEFBR1csQUFBNkMsQUFBd0IsQUFDaEY7V0FBTyxDQUFDLEdBQUcsVUFBSixBQUFjLFNBQWQsQUFBdUIsSUFBdkIsQUFBMkIsVUFBVSxHQUFHLGlCQUFKLEFBQXFCLFNBQXJCLEFBQThCLElBQUksS0FBbEMsQUFBdUMsU0FBUyxHQUFHLFVBQUosQUFBYztXQUNqRyxLQUQwRyxBQUNyRyxBQUNWO2NBRitHLEFBRXZHLEFBQ1I7Z0JBQVUsS0FIcUcsQUFHaEcsQUFDZjthQUorRyxBQUl4RyxBQUNQO21CQUwrRyxBQUtsRyxBQUNiO21CQU4rRyxBQU1sRyxBQUNiO2dCQUFVLFlBUHFHLEFBT3JHLEFBQVksQUFDdEI7OzRCQUNzQixxQ0FBcUMsS0FEckQsQUFDMEQsQUFDOUQ7Z0JBQVEsS0FWOEUsQUFBdUIsQUFRekcsQUFFUztBQUZULEFBQ0o7QUFUNkcsQUFDL0csS0FEd0YsRUFBMUYsQUFBTyxBQUFvQyxBQUErQyxBQVl2RixBQUNKLEtBYjRDO0FBTHRDLEdBQUEsRUFBUCxBQUFPLEFBa0JKLEFBQ0o7QUFwQkQ7O0FBc0JBLFFBQUEsQUFBUTtVQUNFLENBQUMsR0FBRyxPQUFKLEFBQVcsbUJBQVgsQUFBOEIsaUJBRHRCLEFBQ1IsQUFBK0MsQUFDdkQ7cUJBQW1CLENBQUMsR0FBRyxPQUFKLEFBQVcsbUJBRmhDLEFBQWtCLEFBRUcsQUFBOEI7QUFGakMsQUFDaEIiLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90ay9wcm9qZWN0cy9qb2ItYWRtaW4ifQ==