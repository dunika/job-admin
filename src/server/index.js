import bodyParer from 'body-parser';
import compression from 'compression';
import express from 'express';
import next from 'next';
import morgan from 'morgan';
import { resolve } from 'path';

import routes from 'routes';
import api from 'server/api';
import { isDevelopment } from 'isomorphic/utils';
import { initialize as initializeDatabase } from 'server/database';
import { redirects } from 'server/middleware';
import { listen } from 'server/lib/utils';

const app = next({
  dir: resolve(__dirname, '../'),
  dev: isDevelopment,
});

const server = express();

server.use(morgan(isDevelopment ? 'dev' : 'combined', {
  skip: req => req.url.includes('_next'),
}));
server.use(bodyParer.json());
server.use(compression());
server.use(redirects());
server.use('/api', api());
server.use(routes.getRequestHandler(app));

const initialize = async () => {
  try {
    await initializeDatabase();
    await app.prepare();

    const listener = await listen(server, process.env.PORT || 3000);
    console.log(`Server started on port ${listener.address().port}`);
  } catch (error) {
    console.error(error);
  }
};

initialize();

