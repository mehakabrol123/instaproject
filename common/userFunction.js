'use strict'

const  mongoose = require('mongoose');
const { db } = require('../models/userModel');

//tables
var UserTable = mongoose.model('UserTable');


//exports
exports.insertData = insertData;
// exports.getData = getData;
// exports.updateData = updateData;
// exports.deleteData = deleteData;


//functions logic 
 function insertData(req, res){
    const item= new UserTable({
        Name: req.body.Name,
        password: req.body.password,
        age: req.body.age,
        phone: req.body.phone,
        state: req.body.state,
        city: req.body.city,
        email: req.body.email
    });
    db.collection('userData').insertOne(item,function(err, result){
        console.log('Item inserted');
        db.close;
    });
   
};

// function getData(req,res){
//     var resultArray =[];
//     var data = db.collection('userData').find();
//     data.forEach(function(err,doc)  {
//         resultArray.push(doc);
//     },
//         function(){
//             db.close();
           
//         }
//     );
// }