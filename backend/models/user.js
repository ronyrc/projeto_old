var mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model("ricardo.User", UserSchema);
module.exports = User