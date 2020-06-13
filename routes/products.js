const router = require('express').Router();
const Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/menshoes').get((req, res) => {
    Product.find({ category: "Men" })
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/womenshoes').get((req, res) => {
    Product.find({ category: "Women" })
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
})

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

module.exports = router;