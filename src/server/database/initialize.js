import mongoose from 'mongoose';

import Job from './Job'; // eslint-disable-line no-unused-vars
import config from 'config';

mongoose.Promise = Promise;

export default async () => {
  try {
    await mongoose.connect(config.database);
    console.log('Connected to database');
  } catch (error) {
    throw new Error(error);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('The connection to the database has been disconnected');
});
