import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  company: String,
  date: {
    default: Date.now,
    type: Date,
  },
  expiraryDate: String,
  description: String,
  flag: String,
  location: String,
  salary: String,
  source: {
    type: String,
    required: true,
  },
  sourceId: {
    type: String,
    unique: true,
  },
  shortDescription: String,
  title: String,
  urls: {
    listing: String,
    posted: {
      type: String,
      default: null,
    },
    source: {
      required: true,
      type: String,
    },
  },
}, { versionKey: false });

export default mongoose.model('Job', schema);

