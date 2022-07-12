'use strict'
// const mongoose = require('mongoose');


// //export function
// exports.fetch= fetch;


// async function fetch(req,res){
//     try{
//         const data = await User.find()
//         res.json(data);
//     }catch(err){
//         res.send('Error',+ err);
//     }
// }

exports.insertUser=insertUser;
const userModel = require('userModel');
async function insertUser(req,res){
    const user = new User  ({
        Name: req.body.name,
        password: req.body.password,
        phone: req.body.phone,
        state: req.body.state,
        email: req.body.email
    })
}

// module.exports(userModel);