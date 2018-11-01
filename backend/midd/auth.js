const passport = require('passport');

function protectByToken(req, res, next) {
    const authenticate = passport.authenticate("jwt-string-secret", { session: false },
      (err, user, info) => {
        if (err || !user) {
          return res.status(403).json({ ...info });
        }
        return next();
      }
    );
    authenticate(req, res, next);
  }

  module.exports = {
      protectByToken
  }
  