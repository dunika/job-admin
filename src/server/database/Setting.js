import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  settings: {
    type: Object,
    default: null,
  },
}, { versionKey: false });

export default mongoose.model('Setting', schema);

