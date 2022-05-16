const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [
  {
    id: 1,
    username: "tung",
    password: "abc123",
  },
  {
    id: 2,
    username: "hoaianh",
    password: "abc123",
  },
];
router.post("/login", async (req, res) => {
  //Authentication
  const { username, password } = req.body;
  if (!username || !password) {
    throw new Error("Missing credentials");
  }
  const user = users.find(
    (u) => u.password === password && u.username === username
  );
  if (!user) {
    return res.json({
      msg: "Username or password is not correct"
    })
  }
  //Authorization
  const token = jwt.sign({
    username: user.username,
    id: user.id,
  }, process.env.JWT_SECRET_KEY,
  { expiresIn: process.env.ACCESS_TOKEN_EXPIRE })

  return res.json({
    username: username,
    accessToken: token
  })
});


router.post("/register", (req, res) => {});

module.exports = router;
