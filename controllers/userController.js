'use strict'
const mongoose = require('mongoose');

var insertData = require('./../common/userFunction')

async function userData(req,res){
    const newData = await new  insertData(     
    );
    newData.save(
        function(Err,res1){
            if(Err == null){
                return res1.json({
                    status: true,
                    msg: "Added Successfully",
                })
            }else{
                return res1.json({
                   status: false,
                   msg: "Something went wrong..Try again after sometime"
                })
            }
        }
    )
} 




//export function
exports.userData = userData;
