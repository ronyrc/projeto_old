const login = ({ passport, jwt, jwtSecret }, req, res, next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(403).json({
          message: info ? info.message : "Login failed"
        });
      }
      req.login(user, { session: false }, err => {
        if (err) {
          res.json(err);
        }
  
        try {
          const payload = {
            id: user._id,
            username: user.username,
            roles: user.roles
          };
          const token = jwt.sign(payload, jwtSecret, {
            expiresIn: 1 * 60 * 60 * 24 //em segundo segundos
          });
          res.json({ token: token });
        } catch (error) {
          console.log(error);
          return res.status(500).json(error);
        }
      });
    })(req, res, next);
  };
  
  module.exports = {
    login
  }