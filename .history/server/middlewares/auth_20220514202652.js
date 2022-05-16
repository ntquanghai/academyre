const auth = (req, res, next) => {
  const token = req.headers['x-auth-token'];
  console.log("Token", token);
}
module.exports = auth;