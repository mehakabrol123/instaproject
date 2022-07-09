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
    email: { type: String, lowercase: true, trim: true },
  },
  {timestamps: true}
);

var postSchema = new mongoose.Schema(
  {
    postId: {type:Number},
    postUrl: {type: String}
  }
)
module.exports = mongoose.model("UserTable", userSchema);
module.exports = mongoose.model("postTable", postSchema);

