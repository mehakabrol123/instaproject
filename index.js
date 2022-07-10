const mongoose = require('mongoose');
const express= require('express')
app = express()
port= 3002;
bodyParser = require('body-parser');
const url = 'mongodb://localhost/new_server';
//modules
userM= require('./models/userModel')
// userC= require('./controllers/userController')
// commonF= require('./common/userFunction')


//mongodb connection
mongoose.connect(url);
var path = __dirname;
app.use('/server/data', express.static(path + '/data'));

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json())
//routes
const routes= require('./routers/routes')
app.use('/routes', routes);

app.listen(port);
module.exports = app;
console.log("server started on :" +port);

