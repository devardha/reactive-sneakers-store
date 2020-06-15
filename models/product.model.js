const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const ProductSchema = new mongoose.Schema({
    product_name: {type: String, required: true},
    category: {type: Array, required: true},
    price: {type: Number, required: true},
    photo: {type: Array},
    date: {type: Date, default: Date.now},
    slug: { type: String, slug: "product_name" }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;