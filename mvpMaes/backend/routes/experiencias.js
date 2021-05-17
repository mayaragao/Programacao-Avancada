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
  console.log("Add exp called")
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

function aumentaLike(id_experiencia, qtd, res) {
  Experiencia.findByIdAndUpdate(id_experiencia, {"$set":{"numLikes":qtd + 1}})
  .then(() => res.status(201).json('message: success'))
  .catch(err => res.status(400).json(`Error: Something went wrong with your request. ${err}`));
}

router.route('/like').post((req, res) => {
    const id_experiencia = req.body._id;
    console.log(`ìd: ${id_experiencia}`);    
    Experiencia.findById(id_experiencia)
        .then((experiencia) => aumentaLike(id_experiencia, experiencia.numLikes, res))        
        .catch(err => res.status(400).json('Error: Something went wrong with your request.'));
  });

router.route('/getexperiencialikes').get((req, res) => {
    const id_experiencia = req.body._id;
    console.log(`ìd: ${id_experiencia}`);    
    Experiencia.findById(id_experiencia)
        .then((experiencia) => {
          console.log(`Qtd de likes da experiência: ${experiencia.numLikes}`);
          res.status(200).json(experiencia)
        })        
        .catch(err => res.status(400).json('Error: Something went wrong with your request.'));
  });

module.exports = router;