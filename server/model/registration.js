const mongoose = require("mongoose");

var registerScheema = mongoose.Schema({
    name : String,
    phoneNo :Number,
    email : String,
    password: String,
});

module.exports = mongoose.model("registration",registerScheema);