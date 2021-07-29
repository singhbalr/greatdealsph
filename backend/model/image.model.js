const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url : {
        type : String,
        required : true,
        trim : true
    },
    product_id : {
        type : String,
        required : true,
        trim: true
    },
    order : {
        type : String,
        required : true,
        trim: true
    }
}, {
    timestamps:true
});

const Image = mongoose.model('user', imageSchema);

module.exports = Image;