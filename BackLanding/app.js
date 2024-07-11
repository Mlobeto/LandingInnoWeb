const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');
const emailRoutes = require('./src/routes/emailRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/emails', emailRoutes);

module.exports = app;




