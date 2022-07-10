'use strict'

module.exports = function(app){
    var userInsert = require('./../controllers/userController')

    app.route('/userData').post(userInsert.userData);
    
    // app.route('/postData').post(userInsert.postData);
}