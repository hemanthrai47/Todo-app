const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan")
var Registration = require("./model/registration");
var app = express();

mongoose.connect("mongodb://localhost:27017/TodoApp", function(){
    console.log("database is connected")
});

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());
app.use(morgan("dev"));


app.post("/test", function(req,res){
    var obj = {
        name: req.query.name,
        number : req.query.phone
    }
    res.send(obj);
})
app.post("/registration",function(req,res){

    var register = new Scheema({
        name : req.body.name,
        phoneNo : req.body.number,
        email : req.body.email,
        password : req.body.password
    })
    Registration.insertOne(register, function(){

    })
})

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("server is working on " , port)
})