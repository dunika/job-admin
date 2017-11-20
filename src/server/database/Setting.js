import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  settings: {
    type: Object,
    default: {},
  },
}, { versionKey: false });

export default mongoose.model('Job', schema);

