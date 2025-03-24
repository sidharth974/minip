const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const fs = require('fs');
const https = require('https');
require('dotenv').config();

const authRoutes = require('./routes/auth');

// Express App
const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/auth', authRoutes);

// HTTPS Server
const sslOptions = {
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem')
};

https.createServer(sslOptions, app).listen(5000, () => {
  console.log('Secure HTTPS Server running on https://localhost:5000');
});
