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
router.post("/login", (req, res) => {

  //Authentication
  const { username, password } = req.body;
  if (!username || password) {
    return res.json({
      msg: "Missing field",
    });
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
  })
});

router.post("/register", (req, res) => {});

module.exports = router;
