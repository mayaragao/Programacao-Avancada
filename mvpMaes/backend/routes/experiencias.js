const router = require('express').Router();
let {Experiencia, Comentario} = require('../models/experiencias.model');

//Pega todas as experiencias
router.route('/').get((req, res) => {
    Experiencia.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: Something went wrong with your request.'));
});

//Adiciona experiencia
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const newExperiencia = new Experiencia({username, description, numLikes: 0});

  newExperiencia.save()
    .then(() => res.status(201).json('message: success'))
    .catch(err => res.status(400).json('Error: Something went wrong with your request.'));
});

//Comenta em uma experiência
router.route('/comment').post((req, res) => {
    const id_experiencia = req.body._id;
    const username = req.body.username
    const description = req.body.description
    const newComment = new Comentario({username, description})    
    Experiencia.findByIdAndUpdate(id_experiencia, {"$push":{"comments":newComment}})
      .then(() => res.status(201).json('message: success'))
      .catch(err => res.status(400).json('Error: Something went wrong with your request.'));
  });

//Dá like em uma experiencia
router.route('/like').post((req, res) => {
    const id_experiencia = req.body._id;
    console.log(`ìd: ${id_experiencia}`);
    let numLikes = 0
    Experiencia.findById(id_experiencia)
        .then((experiencia) => numLikes = experiencia.numLikes)
        .catch(err => res.status(400).json('Error: Something went wrong with your request.')); 
    console.log(numLikes);
  
    Experiencia.findByIdAndUpdate(id_experiencia, {"$set":{"numLikes":numLikes + 1}})
    .then(() => res.status(201).json('message: success'))
    .catch(err => res.status(400).json(`Error: Something went wrong with your request. ${err}`));
  });

module.exports = router;