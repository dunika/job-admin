const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add('/cv-library', 'CvLibrary');

routes.add('/cv-library/:id', 'Job');

routes.add('/indeed', 'Indeed');

routes.add('/indeed/:id', 'PostJob');

module.exports = routes;

