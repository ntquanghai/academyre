const jwt = require("jsonwebtoken");

const authMdw = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(403).send("Access denied.");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token")
  }
}

module.exports = authMdw;