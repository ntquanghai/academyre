const express = require("express");
const jwt = require("jsonwebtoken");
const authMDw = require("../middlewares/auth");
const UserModel = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.get("/", authMDw, async (req, res) => {
  const id = req.id;
  console.log("success");
  try {
    const user = await UserModel.findById(id).select("+password");
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

router.get("/signout", function (req, res) {
  req.logout();
  if (!req.session) {
    req.session.destroy(function (err) {
      res.redirect("/login");
    });
  } else {
    res.redirect("/login");
  }
});

router.post("/login", async (req, res) => {
  //Authentication
  console.log(req.body);
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "Invalid credentials",
      });
    }
    const isMatchPassword = await bcrypt.compare(password, user.password);
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
      },
      JWT_SECRET,
      { expiresIn: EXPIRY_TIME }
    );
    res.json({
      token: token,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, fullname } = req.body;
    if (!(email && password && fullname)) {
      throw new Error("Missing information");
    }
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        msg: "Email is already exist",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    user = {
      fullname,
      email,
      password: hashPassword,
    };
    await user.save();
    res.status(201).json({
      msg: "Create successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
