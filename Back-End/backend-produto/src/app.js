const express = require('express');
const app = express();
const produtosRoutes = require('./routes/produtosRoutes');

app.use(express.json());
app.use('/produtos', produtosRoutes);

module.exports = app;