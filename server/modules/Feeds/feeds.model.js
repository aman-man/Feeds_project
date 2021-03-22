const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedSchema = new Schema({
  image: { type: String },
  text: { type: String},
  createdAt: { type: Date, default: new Date() },
});

module.exports.Feeds = mongoose.model('Feeds', feedSchema);
