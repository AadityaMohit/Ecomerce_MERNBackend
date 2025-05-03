const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

const app = express();
const port = 5000;

// Connect to MongoDB
connectToMongo();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/images', express.static('./images'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/Products'));
app.use('/api/messages', require('./routes/message'));

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
