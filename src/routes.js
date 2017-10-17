const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add('/', 'index');

routes.add('/jobs/:id', 'Job');

routes.add('/cv-library', 'CvLibrary');

routes.add('/indeed', 'Indeed');

routes.add('/post-job/:id', 'PostJob');

module.exports = routes;

