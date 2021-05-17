const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({  
  username: {type:String, required:true},
    description: {type:String, required:true},
    like:{type:Boolean, required:true},    
}, {
  timestamps: true,
})

const experienciaSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  comments: {type: [commentsSchema], required:false},
  numLikes: {type: Number} 
}, {
  timestamps: true,
});

const Experiencia = mongoose.model('Experiencia', experienciaSchema);

module.exports = Experiencia;