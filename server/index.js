const express = require('express');
const app = express();
const routes = require('./routes/suma');
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.use('/api/v1/', routes);

app.listen(PORT, () => console.log('Servidor corriendo'));