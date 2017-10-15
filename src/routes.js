const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add('/', 'index');
// routes.add('/jobs/:id', '');
routes.add('/cv-library', 'CvLibrary');

module.exports = routes;

