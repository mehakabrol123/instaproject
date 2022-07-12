// 'use strict'

// const express = require('express');
// const router = express.Router();

// const User = require('../models/userModel')

module.exports = function(app){
    var user = require('../controllers/userControll'
    )
    //post query
    app.route('/addUser').post(user.insertUser);
    app.route('/user').get(user.fetchUser);

    //get query
    // app.route('/user').get(user.fetchUser);
    // app.route('/user:id').get(user.fetchSingleUser);
}


