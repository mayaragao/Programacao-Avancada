const router = require('express').Router();
const bcrypt = require('bcrypt')

//Import our user model
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })
  }

function generateRefreshToken(user) {
return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
}

function updateRefreshToken(username, refreshToken) {
    User.updateOne({ username: username }, { refreshToken:refreshToken })
}

function getRefreshTokenList(refreshToken) {
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return undefined
    return user
  })
}

router.route('/register').post(async (req,res) => {
    console.log(req.body)
    const UserName = req.body.username
    const password = req.body.password
    const city = req.body.city
    const email = req.body.email
    const idade = req.body.idade
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({username:UserName,password:hashedPassword,city:city,email:email,idade:idade})
    newUser.save()
        .then(()=> res.json('User added!'))
        .catch(err => res.status(400).json('Error' + err))
})

router.route('/login').post((req, res) => { 
    console.log('Login called!') 
    sessionUser = { username: req.username}
    console.log(sessionUser)
    User.find({ username: req.body.username })
        .then(async (user) => {
            console.log(`Found user ${user} length ${user.length} password: ${user[0].password}`)
            if (user.length !== 1) {
                console.log(`No user found for ${req.body.username}`)
                return res.status(400).send('Cannot find user')
            }
            try {
                if(await bcrypt.compare(req.body.password, user[0].password)) {
                  const accessToken = generateAccessToken(sessionUser)
                  const refreshToken = generateRefreshToken(sessionUser)
                  updateRefreshToken(req.username, refreshToken)
                  res.json({ accessToken, refreshToken, success: true })
                } else {
                  res.send('Not Allowed')
                }
              } catch(error) {
                console.log(error)
                res.status(500).send()
              }
        })
        .catch((e)=>{
            console.log(e)
            res.status(500).send('Something went wrong!')
        })  
 
  });

router.route('/refreshtoken').post((req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    const refreshTokens = User.find({})
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      const accessToken = generateAccessToken({ name: user.name })
      res.json({ accessToken: accessToken })
    })
  })

module.exports = router;