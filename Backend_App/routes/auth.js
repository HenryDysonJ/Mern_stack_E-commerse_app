const { registerUSer } = require('../controler/authCotroler');
const express = require('express');
const router = express.Router();

router.route('/register').post(registerUSer);

module.exports = router;