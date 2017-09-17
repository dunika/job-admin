import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  company: String,
  date: {
    default: Date.now,
    type: Date,
  },
  description: String,
  listingId: {
    type: String,
    unique: true,
  },
  location: String,
  salary: String,
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

