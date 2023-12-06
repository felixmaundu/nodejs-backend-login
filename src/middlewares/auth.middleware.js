// middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not logged in!');

  jwt.verify(token, 'your_secret_key', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');
    req.userInfo = userInfo;
    next();
  });
}

module.exports = {
  authenticateToken,
};
