const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add('/jobs', 'Jobs');

routes.add('/jobs/:id', 'Job');

routes.add('/indeed', 'Indeed');

routes.add('/indeed/:id', 'PostJob');

module.exports = routes;

