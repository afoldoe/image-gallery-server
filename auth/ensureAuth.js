const tokenCheck = require('./token');

module.exports = function ensureAuth(req, res, next) {
  if(req.method === 'OPTIONS') return next();

  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.replace('Bearer', '') : '';

  if(!token) {
    return res.status(403).json({
      error: 'No token'
    });
  }

  tokenCheck.verify(token)
    .then(payload => {
      req.user = payload;
      next();
    })
    .catch(() => {
      res.status(403).json({
        err: 'Invalid token'
      });
    });
};