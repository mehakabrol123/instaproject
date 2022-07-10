'use strict'

const express = require('express');
const router = express.Router();

const User = require('../models/userModel')

router.get('/',async (res,req)=>{
try{
    const user = await User.find()
    res.json(user);
}catch(err){
    res.send('Error',+ err);
}
});

router.post('/',async (res,req)=>{
    const user = new User  ({
        Name: req.body.Name,
        password: req.body,password,
        age: req.body.age,
        phone: req.body.phone,
        state: req.body,state,
        city: req.body.city,
        email: req.body.email
    })
    try{
        const a1= await user.save()
        res.json(a1)
    }catch{

    }
})

module.exports = router;