var mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

UserSchema.methods.checkPassword = function(password, cb) {
  return new Promise((resolve, reject) => {
    resolve(password === this.password)
  })
};

const User = mongoose.model("ricardo.User", UserSchema);
module.exports = User