const ErrorHandler = require("../utils/errorHandling");

module.exports = (err, req, res, next) => {
    err.statuscode = err.statuscode || 500;

    if (process.env.NODE_ENV === "development") {
        res.status(err.statuscode).json({
            status: false,
            message: err.message,
            stack: err.stack,
            error: err
        })
    }

    if (process.env.NODE_ENV === "production") {
       let message = err.message;
       let error = {...err}

       if(err.name === 'ValidationError'){
        message = Object.values(err.errors).map((values)=>values.message)
        error = new ErrorHandler(message, 400);
       }

       if(err.name === "CastError"){
        message = `Resourse not found: ${err.path}`
        error = new ErrorHandler(message, 400)
       }
        res.status(err.statuscode).json({
            status: false,
            message: err.message || "Internal server error",
        })
    }
}