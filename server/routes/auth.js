const express = require("express");
const jwt = require("jsonwebtoken");
const authMDw = require("../middlewares/auth");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
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
router.get("/", authMDw, async (req, res) => {
  const id = req.id;
  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(400).json({
        msg: "No authorization",
      });
    }
    res.json({
      user,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  //Authentication
  const { username, password } = req.body;
  if (!username || !password) {
    throw new Error("Missing credentials");
  }
  try {
    let user = users.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "Invalid credentials",
      });
    }
    const isMathcPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res.status(400).json({
        msg: "Invalid credentials",
      });
    }
    const JWT_SECRET = process.env.JWT_SECRET_KEY;
    const EXPIRY_TIME = +process.env.ACCESS_TOKEN_EXPRIRE_IN;

    //Authorization

    const token = jwt.sign(
      {
        id: user,
        id,
      },
      JWT_SECRET,
      { expiresIn: EXPIRY_TIME }
    );
    res.json({
      token: token,
    })
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("/register", async (req, res) => {
  try {
    const {email, password, fullname} = req.body;
    if (!(email && password && fullname)) {
      throw new Error("Missing information");
    }
    let user = await User.findOne({email});
    if (user) {
      return res.status(400).json({
        msg: "EMail is already exist",
      })
    }
    const salt = await bcrypt.genSalt(10);
    const  hashPassword = await bcrypt.hash(password, salt);
    user = new User({
      fullname,
      email,
      password: hashPassword,
    })
    await user.save();
    res.status(201).json({
      msg: "Create successfully"
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
});

module.exports = router;
