const express = require('express');
const app = express();
const funcionarioRoutes = require('./routes/funcionarioRoutes');

app.use(express.json());
app.use('/funcionario', funcionarioRoutes);

module.exports = app;