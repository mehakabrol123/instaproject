'use strict'
const mongoose = require('mongoose');
var User = mongoose.model("table");
// common function
// const userModel = require('userModel');


// exports.fetchUser= fetchUser;
// exports.fetchSingleUser= fetchSingleUser;


const insertUser = async (req, res) => {
    try{
        const data = {
            name: req.body.name,
            password: req.body.password,
            phoneNumber: req.body.phone,
            state: req.body.state,
            email: req.body.email,
        }
    
        const newUser = new User(data);
        const result = await newUser.save()
        res.send(result);

    }catch (err){
        res.send('Error',+ err);
    }
}

exports.insertUser = insertUser;

//fetching user
// async function fetchUser(req,res){
//         try{
//             const y = await User.find()
//             res.json(y);
//         }catch(err){
//             res.send('Error',+ err);
//         }
// }


