'use strict'
const mongoose = require('mongoose');


//export function
exports.fetch= fetch;


async function fetch(req,res){
    try{
        const data = await User.find()
        res.json(data);
    }catch(err){
        res.send('Error',+ err);
    }
}