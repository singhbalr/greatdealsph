const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim: true
    },
    first_name : {
        type : String,
        required : true,
        trim: true
    },
    last_name : {
        type : String,
        required : true,
        trim: true
    },
    telephone : {
        type : String,
        required : true,
        trim: true
    },
    email : {
        type : String,
        required : true,
        trim: true
    }
}, {
    timestamps:true
});

const User = mongoose.model('user', userSchema);

module.exports = User;