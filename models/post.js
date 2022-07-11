"use strict";
var mongoose = require("mongoose");

var postSchema = new mongoose.Schema(
    {
      caption : {type:String},
      postUrl: {type: String}
    },
    {
        timestamps: true
    }
  )
  module.exports = mongoose.model("postTable", postSchema);
