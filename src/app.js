const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const contactRouter = require('./routes/contact.route');

const app = express();

app.use(cors());
app.use(helmet())
app.use(morgan('dev'));
app.use(express.json());

app.use('/contact', contactRouter);

module.exports = app;