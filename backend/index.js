const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001
const HOSTNAME = process.env.HOST || '127.0.0.1'

const indexRouter = require('./routers/index.js');
app.use('/', indexRouter);

const userRouter = require('./routers/user.js');
app.use('/users', userRouter);


var mongoose = require("mongoose");
// mongo --host sigteste.sti.ufpb.br --port 5556 -u csiadmin -p 'c$!s3cret' --authenticationDatabase 'admin'
mongoose.connect(
  "mongodb://csiadmin:c$!s3cret@sigteste.sti.ufpb.br:5556/admin",
  { useNewUrlParser: true }
);
var db = mongoose.connection;
db.on("error", (a,b) => console.error("connection error:", a, b));
db.once("open", function() {
  // we're connected!
  console.log("we're connected!");
  app.listen(PORT, HOSTNAME, () => {
    console.log(`Server listning on ${HOSTNAME}:${PORT}`);
  });
});
