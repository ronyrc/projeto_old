var mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model("rony.User", UserSchema);
module.exports = User