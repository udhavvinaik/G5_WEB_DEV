const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: String,
  password: String,
});

module.exports = mongoose.model("User", UserSchema);