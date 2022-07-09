const mongoose = require('mongoose');
const express= require('express')
app = express()
port= 8001;
bodyParser = require('body-parser'),
//modules
userM= require('./models/userModel')
userC= require('./controllers/userController')
commonF= require('./common/userFunction')


//mongodb connection
mongoose.connect("mongodb://localhost/new_server");
var path = __dirname;
app.use('/server/data', express.static(path + '/data'));

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
const routes= require('./routes/routes')
routes(app);

app.listen(port);
module.exports = app;
console.log("server started on :" +port);

