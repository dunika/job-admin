'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose.Schema({
  company: String,
  date: {
    default: Date.now,
    type: Date
  },
  description: String,
  listingId: {
    type: String,
    unique: true
  },
  flag: String,
  location: String,
  salary: String,
  source: {
    type: String,
    required: true
  },
  sourceId: {
    type: String,
    unique: true
  },
  shortDescription: String,
  title: String,
  urls: {
    listing: String,
    posted: {
      type: String,
      default: null
    },
    source: {
      required: true,
      type: String
    }
  }
}, { versionKey: false });

exports.default = _mongoose2.default.model('Job', schema);