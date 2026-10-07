const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },

    price: {
        type: Number,
        required: [true, "Please enter product price"],
        default: 0.0
    },

    discription: {
        type: String,
        required: [true, "Please enter product discription"],
    },

    ratings: {
        type: Number,
        default: 0
    },

    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ],

    category: {
        type: String,
        required: [true, "Please select category for this product"],
        enum: {
            values: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books'],
            message: "Please select a valid category"
        }
    },

    seller: {
        type: String,
        required: [true, "Please enter product seller"]
    },

    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [20, "Product stock cannot exceed 20 characters"],
        default: 0
    },

    numOfReviews: {
        type: Number,
        default: 0
    },

    reviews: [
        {

            name: {
                type: String,
                required: true
            },

            rating: {
                type: Number,
                required: true
            },
            
            comment: {
                type: String,
                required: true
            }
        },
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }

})


const schema = mongoose.model("Product", productSchema);

module.exports = schema;