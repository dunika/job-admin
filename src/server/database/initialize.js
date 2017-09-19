import mongoose from 'mongoose';

import config from 'config';
import { isDevelopment } from 'isomorphic';
import Job from './Job'; // eslint-disable-line no-unused-vars

mongoose.Promise = Promise;

export default async () => {
  try {
    await mongoose.connect(config.database, {
      config: { autoIndex: !isDevelopment },
    });
    console.log('Connected to database');
  } catch (error) {
    throw new Error(error);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('The connection to the database has been disconnected');
});
