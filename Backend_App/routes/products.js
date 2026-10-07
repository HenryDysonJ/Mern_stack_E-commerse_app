const express = require('express');
const { getallProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controler/productCotroler');
const router = express.Router();



router.route('/products').get(getallProducts);
router.route('/products/create').post(createProduct);
router.route('/products/:id').get(getSingleProduct);
router.route('/products/update/:id').put(updateProduct);
router.route('/products/delete/:id').delete(deleteProduct);

module.exports = router;