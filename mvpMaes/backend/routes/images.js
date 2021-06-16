const router = require('express').Router();
let Image = require('../models/images.model');
const pathlib = require('path');

const multer = require('multer');

//Implement a storage strategy
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  //reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    //Accept a file
    cb(null, true)
  } else {
    cb(null, false)
  }  
};

const upload = multer({
  storage: storage,
  limits: {
  fileSize: 1024*1024*5
  },
  fileFilter: fileFilter
});
const fs = require('fs');



//Busca experiencia dado o ID da experiencia
router.route('/upload').post(upload.single('image'), (req, res) => {
  console.log('Upload image called.')
  console.log(`Printing req ${req}`);

  username = req.user.username;
  console.log(`Printing req.user: ${req.user}`)
  originalname = req.file.originalname;
  mimetype = req.file.mimetype
  destination = req.file.destination
  filename = req.file.filename
  path = req.file.path
  size = req.file.size
  
  const newImage = new Image({username, originalname, mimetype, destination, filename, path, size})
  console.log(`My new image is: ${newImage}`)
  var query = {'username':req.user.username}
  
  Image.findOneAndDelete(query)
  .then(image => {
    console.log(`My found image ${image}`)
    if (image !== null) {
      fs.unlink(image.path, (err) => {
        if (err) {
            throw err;
        }  
        console.log("File is deleted.");
      });
    }
    
    //---------------
    newImage.save()
  .then(() => {
    res.status(201).json('message: success')
  })
  .catch(() => {
    console.log(err)
      fs.unlink(path, (err) => {
        if (err) {
            throw err;
        }    
        console.log("File is deleted.");
      });
    res.status(400).json('Error: Something went wrong with your request.');
  })
    //---------------
  })
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


router.route('/download').get((req, res) => {
    console.log('Download image called.')
      Image.findOne({username:req.user.username})
      .then(imageFetched => {
        console.log(`Image found is: ${imageFetched}, and PATH: ${imageFetched.path}`)
        var resolvedPath = pathlib.resolve(__dirname+"/../"+imageFetched.path)
        if (imageFetched !== null) {
          res.sendFile(resolvedPath)
          return
        }
        res.status(404).json({message:'image not found.'})        
      })
      .catch( err => {
        console.log(err)
        res.status(403).json({message: 'failed', error: 'user unidentified'})
      })
});

module.exports = router;

