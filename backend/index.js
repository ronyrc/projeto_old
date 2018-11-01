
require('dotenv').config()
const express = require('express');
const passport = require('passport');
const app = express()
const PORT = process.env.PORT || 3001
const HOSTNAME = process.env.HOST || '127.0.0.1'
//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }));
const cors = require("cors");
app.use(cors()); //TODO - Mudar para que nao permita requisicoes de todos os servidores

//socket
const socketIo = require('socket.io');
const http = require('http');

var server = http.createServer(app);
const io = socketIo(server);

//routes
const { protectByToken } = require('./midd/auth');

// configuracao das strategias de exportacao
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
    function (jwtPayload, cb) {
      cb(null, jwtPayload);
    }
  )
);

const User = require('./models/user');
const passportLocal = require("passport-local");
/** local strategy */
passport.use("local",
  new passportLocal.Strategy({ usernameField: "email", passwordField: "password" }, function (email, password, cb) {
    // verificando sem banco
   /* if (email === "@" && password === "123") {
      return cb(null, {
        _id: 1,
        name: "Ricardo",
        email: "@"
      });
    }
    else {
      return cb(null, false, {
        message: "Incorrect email or password. 1"
      });
    } 
    //// admin@gmail.com | 123456
    */
    return User.findOne({ email })
      .then(user => {
        if (!user) { return cb(null, false, { message: "Incorrect email or password. 1" }); }
        user
          .checkPassword(password)
          .then(isMatch => {
            if (!isMatch) { return cb(null, false, { message: "Incorrect email or password. 2" }); }
            return cb(null, user);
          })
      })
      .catch(err => {
        console.log(err);
        return cb(err);
      }); 
  }));

const authRouter = require('./routers/auth');
app.use('/auth', authRouter);
const userRouter = require("./routers/user");
app.use("/users", userRouter);
const roomsRouter = require("./routers/rooms");
app.use('/rooms', roomsRouter);
var mongoose = require("mongoose");
// mongo --host sigteste.sti.ufpb.br --port 5556 -u csiadmin -p 'c$!s3cret' --authenticationDatabase 'admin'
mongoose.connect(
  "mongodb://csiadmin:c$!s3cret@sigteste.sti.ufpb.br:5556/admin",
  { useNewUrlParser: true }
);
var db = mongoose.connection;
db.on("error", (a, b) => console.error("connection error:", a, b));
db.once("open", function () {
  // we're connected!
  console.log("we're connected!");
  io.on('connection', (socket) => {
     console.log('Cliente conectado via socket');

     socket.on('sala1', data => {
       console.log(data);
     });

  /*   setInterval(() => {
      socket.emit('evento1', {time: new Date()});
    }, 1000);

    setInterval(() => {
      socket.emit('evento1', {name: 'Rony'});
    }, 2000); */
  });

  server.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening on ${HOSTNAME}:${PORT}`);
  });
});