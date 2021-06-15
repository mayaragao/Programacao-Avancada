const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Import our user model
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30m" });
}

router.route("/register").post(async (req, res) => {
  console.log(req.body);
  const UserName = req.body.username;
  const password = req.body.password;
  const city = req.body.city;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username: UserName,
    password: hashedPassword,
    city: city,
  });
  newUser
    .save()
    .then(() => res.json({ message: "success" }))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/login").post((req, res) => {
  console.log("Login called!");
  sessionUser = { username: req.body.username };

  User.find({ username: req.body.username })
    .then(async (user) => {
      console.log(
        `Found user ${user} length ${user.length} password: ${user[0].password}`
      );
      if (user.length !== 1) {
        console.log(`No user found for ${req.body.username}`);
        return res.status(404).send({
          message: "user not found",
        });
      }
      try {
        if (await bcrypt.compare(req.body.password, user[0].password)) {
          const accessToken = generateAccessToken(sessionUser);
          res.cookie("jwt", accessToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
          });
          res.send({
            message: "success",
            token: accessToken,
          });
        } else {
          res.send("Not Allowed");
        }
      } catch (error) {
        console.log(error);
        res.status(500).send();
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send("Not Allowed");
    });
});

router.get("/user", async (req, res) => {
  try {
    var cookie = req.cookies["jwt"];
    if (cookie == null) {
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]
      if (token == null) return res.sendStatus(401)
      cookie = token
    }
    console.log(`my cookie: ${cookie}`);

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    const claims = jwt.verify(
      cookie,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, user) => {
        console.log(`The error was: ${err}`);
        if (err)
          return res.status(401).send({
            message: "unauthenticated",
          });
        User.findOne({ username: user.username })
          .then((user) => {
            const { username, ...data } = user;
            console.log(`My data is : ${JSON.stringify(data)}`);
            res.status(200).json({ username, message: "success" });
          })
          .catch((e) => {
            return console.log(e);
          });
      }
    );
  } catch (e) {
    console.log(`Error outside was ${e}`);
    return res.status(401).send({
      message: "not authenticated",
    });
  }
});

router.post("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });

  res.send({
    message: "success",
  });
});

module.exports = router;
