"use strict";
var mongoose = require("mongoose");

//INSERT USER
var userSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    password: {type: String},
    age: { type: Number },
    phone: { type: Number },
    state: {type: String, default:null},
	city: {type: String, default:null},
    email: { type: String, lowercase: true, trim: true, required : [true, 'Email is required'] },
  },
  {timestamps: true}
);


module.exports = mongoose.model("UserTable", userSchema);

