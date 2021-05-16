const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const experienciaSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  comments: [{ 
      username: {type:String, required:true},
      text:{type:String, required:true}
      }],
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Experiencia', exerciseSchema);

module.exports = Exercise;