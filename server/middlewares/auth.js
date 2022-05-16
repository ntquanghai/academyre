const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.headers["x-auth-token"];
  console.log("Token", token);
  if (!token) {
    return res.status(401).send("User must login first");
  }
  try {
    jwt.verify(token, "ACADEMYRE_PROJECT");
    next();
  } catch (error) {
    res.status(401).send("token invalid");
  }
};
module.exports = auth;
