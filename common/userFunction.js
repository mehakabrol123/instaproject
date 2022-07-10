'use strict'

const  mongoose = require('mongoose');

//tables
var UserTable = mongoose.model('UserTable');


//exports
exports.insertData = insertData;
exports.getData = getData;
// exports.updateData = updateData;
// exports.deleteData = deleteData;


//functions logic 
 function insertData(req, res){
    const newData= new UserTable({
        Name: "Swati ",
        password: "swati",
        age: 23,
        phone: 123456789,
        state: "Punjab",
        city: "Ludhiana",
        email: "swatisharma2343@gmail.com"
    });
    res.send(newData);
};

function getData(req, res){
    const newData= new UserTable({
        Name: req.body.Name,
        password:req.body.password,
        age:req.body.age,
        phone: req.body.phone,
        state: req.body.state,
        city: req.body.city,
        email: req.body.email
    });
    newData.save(
        function(Err,res1){
            if(Err == null){
                return res.json({
                    status: true,
                    msg: "Added Successfully",
                    body: res1.body.json()
                })
            }else{
                return res.json({
                   status: false,
                   msg: "Something went wrong..Try again after sometime"
                })
            }
        }
    )

}


// function deleteData (req,res){

// }

// function updateData( req, res){

// }

