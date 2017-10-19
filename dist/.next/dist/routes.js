'use strict';

var nextRoutes = require('next-routes');

var routes = nextRoutes();

routes.add('/', 'index');

routes.add('/jobs/:id', 'Job');

routes.add('/cv-library', 'CvLibrary');

routes.add('/indeed', 'Indeed');

routes.add('/post-job/:id', 'PostJob');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3Qvcm91dGVzLmpzIl0sIm5hbWVzIjpbIm5leHRSb3V0ZXMiLCJyZXF1aXJlIiwicm91dGVzIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBSSxhQUFhLEFBQWIsQUFBSjs7QUFFQSxJQUFJLFNBQVMsQUFBYjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLEtBQWdCLEFBQWhCOztBQUVBLE9BQU8sQUFBUCxJQUFXLEFBQVgsYUFBd0IsQUFBeEI7O0FBRUEsT0FBTyxBQUFQLElBQVcsQUFBWCxlQUEwQixBQUExQjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLFdBQXNCLEFBQXRCOztBQUVBLE9BQU8sQUFBUCxJQUFXLEFBQVgsaUJBQTRCLEFBQTVCOztBQUVBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdGsvcHJvamVjdHMvam9iLWFkbWluIn0=