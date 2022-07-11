const mongoose = require('mongoose');

const usrSchema = new mongoose.Schema(
    {
        bio: {
            type:String,
        },
        name: {
            type: String
        },
        username: {
            type:String,
            required:[true, 'username is required'],
        }
        
    },
    {
        timestamps: true
    }
);

module.exports= mongoose.model('ProfileTable', usrSchema);