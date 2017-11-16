import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  facebook: {
    appId: String,
    appSecret: String,
    accessToken: String,
  },
}, { versionKey: false });

export default mongoose.model('Job', schema);

