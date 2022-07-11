const mongoose = require('mongoose');
const express= require('express')
app = express()
port= 3008;
bodyParser = require('body-parser');
const url = 'mongodb://localhost/nserver';

userMdl= require('./models/userModel')
userCtl= require('./controllers/userControll')


mongoose.connect(url);
var path = __dirname;
app.use('/server/data', express.static(path + '/data'));

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
const routes= require('./routers/routes')
// app.use('/routes', routes);
routes(app);

app.listen(port);
module.exports = app;
console.log("server started on :" +port);

