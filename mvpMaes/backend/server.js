const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

require('dotenv').config();
const jwt = require('jsonwebtoken')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser())

//Connecting to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//importing and using routes
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const experienciasRouter = require('./routes/experiencias');
const aexperienciasRouter = require('./routes/aexperiencias');
const images = require('./routes/images');

//app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/experiencias', experienciasRouter);
app.use('/aexperiencias', authenticateToken, aexperienciasRouter)
app.use('/images', authenticateToken, images)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}