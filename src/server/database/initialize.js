import mongoose from 'mongoose';

import { database } from 'config';
import { isDevelopment } from 'isomorphic/utils';
import Job from './Job'; // eslint-disable-line no-unused-vars

mongoose.Promise = Promise;

export default async () => {
  try {
    const connection = database;
    await mongoose.connect(connection, {
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
