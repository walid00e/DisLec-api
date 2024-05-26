const express = require('express');
const studentRouter = require('./student');
const authRouter = require('./auth');

const app = express();

app.use('/student', studentRouter);
app.use('/auth', authRouter);

module.exports = app;