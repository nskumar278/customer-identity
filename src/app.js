const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const contactRouter = require('./routes/contact.route');
const identifyRouter = require('./routes/identify.route');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/contact', contactRouter);
app.use('/identify', identifyRouter);

module.exports = app;
