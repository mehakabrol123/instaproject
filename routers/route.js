'use strict'
module.exports = function(app){
    var user = require('../controllers/userControll');
    //post query
    app.route('/adduser').post(user.insertUser);
    // app.route('/user').get(user.fetchUser);

    //get query
    // app.route('/user').get(user.fetchUser);
    // app.route('/user:id').get(user.fetchSingleUser);
}


