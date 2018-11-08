
require('dotenv').config()
const express = require("express");
const passport = require("passport");
const app = express()
const PORT = process.env.PORT || 3001
const HOSTNAME = process.env.HOST || '127.0.0.1'
//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }));
const cors = require("cors");
app.use(cors()); //TODO - Mudar para que nao permita requisicoes de todos os servidores

//socket
const socketIo = require("socket.io");
const http = require("http")

var server = http.createServer(app);
const io = socketIo(server);

//routes
const { protectByToken } = require('./midd/auth') 

// configuracao das strategias de autenticacao
const passportJWT = require("passport-jwt");

/** jwt strategy */
const jwtSecret = process.env.JWT_SECRET || '123abc';
passport.use(
  "jwt-string-secret",
  new passportJWT.Strategy(
    {
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    function(jwtPayload, cb) {
      cb(null, jwtPayload);
    }
  )
);

const passportLocal = require("passport-local");
const User = require("./models/user");

/** local strategy */
passport.use(
  "local",
  new passportLocal.Strategy(
    { usernameField: "email", passwordField: "password" },
    function(email, password, cb) {
      
      return User.findOne({ email })
        .then(user => {
          if (!user) {
            return cb(null, false, {
              message: "Incorrect email or password. 1"
            });
          }
          user.checkPassword(password).then(isMatch => {
            if (!isMatch) {
              return cb(null, false, {
                message: "Incorrect email or password. 2"
              });
            }
            return cb(null, user);
          });
        })
        .catch(err => {
          console.log(err);
          return cb(err);
        });
    }
  )
);

const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");
const roomsRouter = require("./routers/rooms");
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/rooms", roomsRouter);

var mongoose = require("mongoose");
const prepareSocket = require("./prepareSocket");
// mongo --host sigteste.sti.ufpb.br --port 5556 -u csiadmin -p 'c$!s3cret' --authenticationDatabase 'admin'
mongoose.connect(
  "mongodb://csiadmin:c$!s3cret@sigteste.sti.ufpb.br:5556/admin",
  // "mongodb://localhost:27017/chatsti",
  { useNewUrlParser: true }
);
var db = mongoose.connection;
db.on("error", (a,b) => console.error("connection error:", a, b));
db.once("open", function() {
  // we're connected!
  console.log("we're connected!");

  prepareSocket(io)

  

  server.listen(PORT, HOSTNAME, () => {
    console.log(`Server listning on ${HOSTNAME}:${PORT}`);
  });
});