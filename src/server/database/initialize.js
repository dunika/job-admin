import mongoose from 'mongoose';

import { database } from 'config';
import { isDevelopment } from 'isomorphic/utils';
import Job from './Job'; // eslint-disable-line no-unused-vars
import Setting from './Setting';

mongoose.Promise = Promise;

const createInitalDocuments = async () => {
  try {
    const facebook = await Setting.findOneAndUpdate({ name: 'facebook' }, {}, { new: true, upsert: true });
    if (!facebook) {
      facebook.settings = {
        appId: '',
        appSecret: '',
        accessToken: '',
      };
      await facebook.save();
    }
  } catch (error) {
    throw error;
  }
};

export default async () => {
  try {
    const connection = database;
    await mongoose.connect(connection, {
      config: { autoIndex: !isDevelopment },
    });
    await createInitalDocuments();
    console.log('Connected to database');
  } catch (error) {
    throw new Error(error);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('The connection to the database has been disconnected');
});
