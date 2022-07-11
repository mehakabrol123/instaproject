'use strict'

const mongoose = require('mongoose');
var User= mongoose.model("UserTable");

exports.insertUser = insertUser;
exports.fetchUser= fetchUser;
// exports.fetchSingleUser= fetchSingleUser;


async function insertUser(req,res){
    const user = new User  ({
        Name: req.body.name,
        password: req.body.password,
        phone: req.body.phone,
        state: req.body.state,
        email: req.body.email
    })
   // user.save()
    try{
        const x= await user.save()
        res.json(x)

    }catch (err){
        res.send('Error',+ err);
    }
}

//fetching user
async function fetchUser(req,res){
        try{
            const y = await User.find()
            res.json(y);
        }catch(err){
            res.send('Error',+ err);
        }
}

// async function updateUser(req,res){
//     try{
        
//     }catch(err){

//     }
// }


