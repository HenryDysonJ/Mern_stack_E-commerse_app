const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI,)
    .then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    // .catch((err) => {
    //     console.log(`MongoDB connection error: ${err}`);
    // });
}

module.exports = connectDatabase;