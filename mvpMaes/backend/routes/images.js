const router = require('express').Router();
let Image = require('../models/images.model');

const multer = require('multer');
const upload = multer({dest:'uploads/'});
const fs = require('fs');

//Busca experiencia dado o ID da experiencia
router.route('/upload').post(upload.single('userImage'), (req, res) => {
  console.log('Upload image called.')
  //console.log(req.file);

  username = req.user.username;
  console.log(req.user)
  originalname = req.file.originalname;
  mimetype = req.file.mimetype
  destination = req.file.destination
  filename = req.file.filename
  path = req.file.path
  size = req.file.size
  
  const newImage = new Image({username, originalname, mimetype, destination, filename, path, size})
  console.log(newImage)

  newImage.save()
  .then(() => res.status(201).json('message: success'))
  .catch(err => {
      console.log(err)
      fs.unlink(path, (err) => {
        if (err) {
            throw err;
        }
    
        console.log("File is deleted.");
      });
      res.status(400).json('Error: Something went wrong with your request.');
    });
  });

module.exports = router;

