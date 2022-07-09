'use strict'

const  mongoose = require('mongoose');

//tables
var UserTable = mongoose.model('UserTable');

exports.data = data;

//functions logic 
 function data(req, res){
    // console.log('============start===========')
    // console.log(req.body);
    // console.log(req.params);
    // console.log('============end===========')
    const newData= new UserTable({
        Name: req.body.Name,
        password:req.body.password,
        age:req.body.age,
        phone: req.body.phone,
        state: req.body.state,
        city: req.body.city,
        email: req.body.email
    });
    res.send(newData);
    
};



