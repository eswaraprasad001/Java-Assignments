
var express = require('express');
const bodyParser= require('body-parser')
const usermodel=require('../models/user-model.js')
var router=express.Router();
var app =express();
var jsonParser = bodyParser.json()

router.get('/',(req,res)=>{
    res.send("Users")
})

router.post('/add', jsonParser, function(req, res, next) {
    console.log(req.body)
    let newUser = new usermodel({
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email:  req.body.email,
        password:  req.body.password
    });
    newUser.save(function(err, newUser){
    if(err)
    res.send(err);
    else
    res.send ('Students Route  Works');
    });
})

router.get('/list',jsonParser, function(req, res, next) {
    usermodel.find(function(err, response) {
    if(err)
    res.send(err);
    else
    res.send({status: 200, students: response });
    });
});

router.get('/searchByFirstName', function(req, res, next) {
    const firstNameQuery = req.query.firstName;
    usermodel.find({firstName: firstNameQuery}, function(err, response) {
    if (err)
    res.send(err);
    else
    res.send({status: 200, students: response});
    });
    });
router.put('/updateUser',jsonParser, function(req, res, next) {
        const id = req.query.userId;
        const fName = req.query.firstName;
        usermodel.findByIdAndUpdate(id, {firstName: fName}, function(err, response) {
        if (err)
        res.send(err);
        else
        res.send({status: 200, users: response});
        });
        });  
  

    // router.put('/updateUser', function(req, res, next) {
    //     const id = req.query.userId;
    //     const fName = req.query.firstName;
    //     StudentModel.findByIdAndUpdate (id, {firstName: fName}, function(err,
    //     if(err)
    //     res.send(err);
    //     else
    //     res.send({status: 200, students: response});
    //     });
    //     11.
module.exports=router;




// firstName: req.body.firstName,
// lastName:  req.body.lastName,
// email:  req.body.email,
// password:  req.body.password