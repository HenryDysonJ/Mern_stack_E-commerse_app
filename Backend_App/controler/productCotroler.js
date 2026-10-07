const Product = require("../models/productModules");
const ErrorHandler = require("../utils/errorHandling");
const catchAsyncError = require('../middileWares/catchAsyncError');

// get all products -- api/v1/products
exports.getallProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        message: "All products fetched successfully",
        count: products.length,
        data: products
    })
}

//get single product -- api/v1/products/:id
exports.getSingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
       return next(new ErrorHandler("Product Not Found from middleware", 400));
    }
    res.status(201).json({
        status: true,
        product
    })
}

// create product -- api/v1/products/create
exports.createProduct = catchAsyncError(async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
});

//update product -- api/v1/products/update
exports.updateProduct = async (req, res) => {
    let findProduct = await Product.findById(req.params.id);

    if (!findProduct) {
        return res.status(404).json({
            status: false,
            message: "Product not found"
        })
    }

findProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new : true,
    runValidators: true 
})

res.status(202).json({
    status: true,
    message: "Product update succesfuly",
    data: findProduct
})
}

exports.deleteProduct = async (req, res)=>{
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);

     if (!deleteProduct) {
        return res.status(404).json({
            status: false,
            message: "Product Already Deleted"
        })
    }

    res.status(201).json({
        status: true,
        message: "Product deleted successfuly"
    })

}