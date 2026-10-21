const catchAsyncError = require('../middileWares/catchAsyncError');
const User = require('../models/userModels');


exports.registerUSer = catchAsyncError( async(req, res, next)=>{
  const {name, email, password, avatar} = req.body;

 const user = await User.create({ name, email, password, avatar});

  res.status(201).json({
    message: true,
    user
  })
}) 