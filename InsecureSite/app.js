// InsecureSite/app.js

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

connectDB();
app.use('/api/auth', authRoutes);

// HTTP Server (Insecure)
app.listen(3000, () => {
    console.log('Insecure HTTP Server running on http://localhost:3000');
});
