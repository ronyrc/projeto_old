var mongoose = require("mongoose");
const RoomSchema = new mongoose.Schema({
  name: String
});

RoomSchema.pre("find", function() {
  // retirar o campo "__v" do contexto
  this.select("-__v");
});
const Room = mongoose.model("rony.Room", RoomSchema);
module.exports = Room