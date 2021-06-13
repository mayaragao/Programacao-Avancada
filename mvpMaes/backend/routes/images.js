const router = require('express').Router();

const multer = require('multer');
const upload = multer({dest:'uploads/'});

//Busca experiencia dado o ID da experiencia
router.route('/upload').post(upload.single('userImage'), (req, res) => {
  console.log(req.file);
   /*  const id_experiencia = req.body._id;
    console.log(`ìd: ${id_experiencia}`);    
    Experiencia.findById(id_experiencia)
        .then((experiencia) => {
          console.log(`Qtd de likes da experiência: ${experiencia.numLikes}`);
          res.status(200).json(experiencia)
        })        
        .catch(err => res.status(400).json('Error: Something went wrong with your request.')); */
  });

module.exports = router;

