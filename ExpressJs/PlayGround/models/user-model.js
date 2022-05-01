const mongoose = require('mongoose');
var userSchema = mongoose.Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String
    });

    var user = mongoose.model("users", userSchema);

    module.exports=user;
