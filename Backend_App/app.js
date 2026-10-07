const express = require('express');
const app = express();
const middileware = require('./middileWares/error');

// json midilewere
app.use(express.json());

const product = require('./routes/products');

app.use('/api/v1', product);

app.use(middileware);

module.exports = app;