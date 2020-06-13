const router = require('express').Router();
const Product = require('../models/product.model');

// Get All Products
router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
})

// Get Men Soes Product
router.route('/menshoes').get((req, res) => {
    Product.find({ category: "Men" })
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
})


// Get Women Shoes Product
router.route('/womenshoes').get((req, res) => {
    Product.find({ category: "Women" })
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
})


// Add Product
router.route('/add').post((req, res)=>{
    const product_name = req.body.product_name;
    const category = req.body.category;
    const price = req.body.price;
    const photo = req.body.photo;

    const newProduct = new Product({
        product_name,
        category,
        price,
        photo
    });

    newProduct.save()
           .then(()=> res.json('Product added!'))
           .catch((err) => res.status(500).json('Error: ' + err));
});

// Get Product By Slug
router.route('/:slug').get((req, res) => {
    Product.find({slug: req.params.slug})
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;