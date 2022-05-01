var express = require('express');

var app =express();

var users=require('./routes/user')
const mongoose = require('mongoose');
var uri=require('./properties').DB_URL
const usermodel=require('./models/user-model.js')
const cookie=require('cookie-parser')
app.use('/user',users)
app.use(express.json());
console.log(uri)

mongoose.connect(uri)
console.log("hello")


mongoose.connection.on("Connected",()=>{
    console.log("Connected to Database")
})







app.get('/', function(req, res) {
  res.send('Hello from root route.')
});

// app.get('/things/:name/:id', function(req, res) {
//    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
// });


// app.get('/names/:id([0-9]{5})', function(req, res){
//     res.send('id: ' + req.params.id);
//  });
//  app.get('*', function(req, res){
//     res.send('Sorry, this is an invalid URL.');
//  });

 app.listen(3000);
