const mongoose = require('mongoose')
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const ProductSchema = new mongoose.Schema({
    product_name: {type: String, required: true},
    category: {type: Array, required: true},
    price: {type: Number, required: true},
    photo: {type: String},
    date: Date
})

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=product_name%>' });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;