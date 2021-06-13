const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    minlength: 3
  },
  originalname: {
      type: String,
      required: true
  }, 
  mimetype: {
      type: String,
      required: true
  },  
  destination: {
      type: String,
      required: true
  },  
  filename: {
      type: String,
      required: true
  },  
  path: {
      type: String,
      required: true
  },  
  size: {
      type: Number,
      required: true
  }
}, {
  timestamps: true,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;