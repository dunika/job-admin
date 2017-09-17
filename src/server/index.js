import express from 'express';
import { resolve } from 'path';
import compression from 'compression';
import next from 'next';

const port = process.env.PORT || 3000;

const app = next({
  dir: resolve(__dirname, '../client'),
  dev: process.env.NODE_ENV !== 'production',
});

const server = express();

server.use(compression());

const listen = (server, port) => new Promise((resolve, reject) => { // eslint-disable-line
  const listener = server.listen(port, (error) => {
    if (error) reject(error);
    resolve(listener);
  });
});

const initialize = async () => {
  try {
    await app.prepare();
    const listener = await listen(server, port);
    console.log(`Server started on ${listener.address().port}`);
  } catch (error) {
    console.error(error);
  }
};

initialize();

