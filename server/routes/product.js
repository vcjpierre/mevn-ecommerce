const router = require('express').Router()
const Product = require('../models/product');

const upload = require("../middlewares/upload.photo")

// POST request -> create a new product
router.post('/products', upload.single("photo"), async (req, res) => {
    try {
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.file.location;
        product.stockQuantity = req.body.stockQuantity

        await product.save();

        res.json({
            status: true,
            message: "Successfully saved."
        });
    } catch (err) {
        res.json(500).json({
            success: false,
            message: err.message
        })
    }
});

// GET request -> get all product


// GET request -> get a single product


// PUT request -> update a single product


// DELETE request -> delete a single product

module.exports = router;