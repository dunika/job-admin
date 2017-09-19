import bodyParer from 'body-parser';
import compression from 'compression';
import express from 'express';
import next from 'next';
import { resolve } from 'path';
import morgan from 'morgan';

import { isDevelopment } from 'isomorphic';
import { initialize as initializeDatabase } from 'database';
import routes from 'routes';

const port = process.env.PORT || 3000;

const app = next({
  dir: resolve(__dirname, '../client'),
  dev: isDevelopment,
});

const server = express();

server.use(morgan(isDevelopment ? 'dev' : 'combined'));
server.use(bodyParer.json());
server.use(compression());

const listen = (server, port) => new Promise((resolve, reject) => { // eslint-disable-line
  const listener = server.listen(port, (error) => {
    if (error) reject(error);
    resolve(listener);
  });
});

const initialize = async () => {
  try {
    await initializeDatabase();
    await app.prepare();
    const listener = await listen(server, port);
    server.use('/api', routes());
    server.use((error, req, res, next) => {
      const message = error.message || error;
      console.log(error, req, res, next, 'adf');
      console.error(`Error: ${message}`);
      res.status(500).json({ error: message });
    });
    console.log(`Server started on port ${listener.address().port}`);
  } catch (error) {
    console.error(error);
  }
};

initialize();

