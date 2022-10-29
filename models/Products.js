const mongoose = require("mongoose");
const { Schema } = mongoose;
const db = require("../config/db");

const productSchema = new Schema({
     product_name: String,
     country: String,
     price: String,
});

const Product = db.model("product", productSchema);
module.exports = Product;
