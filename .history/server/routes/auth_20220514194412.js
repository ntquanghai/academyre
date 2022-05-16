const express = require("express");
const router = express.Router();

const users = [
  {
    username: "tung",
    password: "abc123",
  },
  {
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
  
});

router.post("/register", (req, res) => {});

module.exports = router;
