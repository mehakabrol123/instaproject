const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
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
        },
        gender: {
            type:String
        }
    },
    {
        timestamps: true
    }
);

module.exports= mongoose.model('ProfileTable', profileSchema);