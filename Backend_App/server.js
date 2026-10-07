const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

dotenv.config({ path: "config/config.env" });

connectDatabase();


const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server is unhandled rejuction");
    server.close((err) => process.exit(1))
})

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server is uncaught Exception");
    server.close((err) => process.exit(1))
})
