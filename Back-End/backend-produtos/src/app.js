const express = require('express');
const app = express();
const clientesRoutes = require('./routes/clientesRoutes');

app.use(express.json());
app.use('/clientes', clientesRoutes);

module.exports = app;