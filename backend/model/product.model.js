const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim: true
    },
    sku : {
        type : Number,
        required : true,
        trim: true
    },
    category_id : {
        type : Number,
        required : true,
        trim: true
    },
    inventory_id : {
        type : Number,
        required : true,
        trim: true
    },
    price : {
        type : Number,
        required : true,
        trim: true
    },
    discount : {
        type : Number,
        required : true,
        trim: true
    }
}, {
    timestamps:true
});


const Product = mongoose.model('product', productSchema);

module.exports = Product;