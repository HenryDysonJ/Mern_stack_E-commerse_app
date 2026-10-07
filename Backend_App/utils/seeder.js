const product = require('../data/product.json');
const Product = require('../models/productModules');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

dotenv.config({ path: "config/config.env" });
connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('All products deleted successfully');

        await Product.insertMany(product);
        console.log('All products inserted successfully');
    } catch (error) {
        console.error('Error seeding products:', error);
    }
};

seedProducts(); 