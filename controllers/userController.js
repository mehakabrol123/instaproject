'use strict'
const mongoose = require('mongoose');

var data = require('./../common/userFunction')

async function addUser(req,res){
    const newData= new data(
        req.body.json()
    )
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

// async function updateUser(req,res){
//     const newData= new data ()
//     newData.save(
//         function(Err,res1){
//             if(Err == null){
//                 return res.json({
//                     status: true,
//                     msg: "Updated Successfully"
//                 })
//             }else{
//                 return res1.json({
//                    status: false,
//                    msg: "Something went wrong..Try again after sometime"
//                 })
//             }
//         }
//     )
// }

// async function deleteUser(req, res){
//     const newData= new data ()
//     newData.save(
//         function(Err,res1){
//             if(Err == null){
//                 return res.json({
//                     status: true,
//                     msg: "Deleted Successfully"
//                 })
//             }else{
//                 return res1.json({
//                    status: false,
//                    msg: "Something went wrong..Try again after sometime"
//                 })
//             }
//         }
//     )
// }

exports.addUser = addUser;