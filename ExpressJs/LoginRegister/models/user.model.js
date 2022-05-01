const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    phoneNo:Number,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);
module.exports = User