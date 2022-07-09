"use strict";
var mongoose = require("mongoose");

//INSERT USER
var userInsert = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    password: {type: String},
    age: { type: Number },
    phone: { type: Number },
    state: {type: String, default:null},
	city: {type: String, default:null},
    email: { type: String, lowercase: true, trim: true },
  },
  {timestamps: true}
);
module.exports = mongoose.model("UserTable", userInsert);
