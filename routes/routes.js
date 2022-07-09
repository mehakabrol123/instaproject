'use strict'

module.exports = function(app){
    var userInsert = require('./../controllers/userController'
    )

    app.route('/addUser').post(userInsert.addUser);
}