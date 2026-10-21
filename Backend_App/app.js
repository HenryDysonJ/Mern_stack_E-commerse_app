const express = require('express');
const app = express();
const middileware = require('./middileWares/error');

// json midilewere
app.use(express.json());

const product = require('./routes/products');
const auth = require('./routes/auth');


app.use('/api/v1', product);
app.use('/api/v1', auth);

app.use(middileware);

module.exports = app;