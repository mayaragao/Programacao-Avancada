const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({  
    username: {type:String, required:true},
    description: {type:String, required:true},
    like:{type:Boolean, required:false},    
}, {
  timestamps: true,
})

const experienciaSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  comments: {type: [commentsSchema], required:false},
  numLikes: {type: Number, required:false} 
}, {
  timestamps: true,
});

const Experiencia = mongoose.model('Experiencia', experienciaSchema);
const Comentario = mongoose.model('Comentario', commentsSchema);
module.exports = {Experiencia, Comentario};