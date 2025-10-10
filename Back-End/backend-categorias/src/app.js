const express = require('express');
const app = express();
const categoriaRoutes = require('./routes/categoriaRoutes');

app.use(express.json());
app.use('/categorias', categoriaRoutes);

module.exports = app;