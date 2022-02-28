const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShirtSchema = new Schema({
    productName: {
        type: String,
        unique: true,
        required: [true, 'productName is required']
    },
    productCompany: {
        type: String,
    },
    productImg: {
        type: String,
    },
    productPrice: {
        type: Number,
    },
    productDescription: {
        type: String,
    },
});

const Shirt = mongoose.model("Shirt",ShirtSchema);
module.exports = Shirt;