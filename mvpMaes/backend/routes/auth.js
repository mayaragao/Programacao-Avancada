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
    sessionUser = { username: req.body.username}
    
    User.find({ username: req.body.username })
        .then(async (user) => {
            console.log(`Found user ${user} length ${user.length} password: ${user[0].password}`)
            if (user.length !== 1) {
                console.log(`No user found for ${req.body.username}`)
                return res.status(404).send({
                  message: 'user not found'
              })
            }
            try {
                if(await bcrypt.compare(req.body.password, user[0].password)) {
                  const accessToken = generateAccessToken(sessionUser)
                  res.cookie('jwt', accessToken, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000 // 1 day
                })
                res.send({
                  message: 'success'
              })
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

router.get('/user', async (req, res) => {
    try {
        const cookie = req.cookies['jwt']

        const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET)

        if (!claims) {
            return res.status(401).send({
                message: 'unauthenticated'
            })
        }

        const user = await User.findOne({ username: req.body.username })

        const {password, ...data} = await user.toJSON()

        res.send(data)
    } catch (e) {
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
})

router.post('/logout', (req, res) => {
  res.cookie('jwt', '', {maxAge: 0})

  res.send({
      message: 'success'
  })
})


module.exports = router;