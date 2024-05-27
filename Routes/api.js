const express = require('express');
const studentRouter = require('./student');
const authRouter = require('./auth');
const userRouter = require('./user');
const rankRouter = require('./rank');
const imageRouter = require('./image');

const app = express();

app.use('/student', studentRouter);
app.use('/user', userRouter);
app.use('/rank', rankRouter);
app.use('/auth', authRouter);
app.use('/image', imageRouter);
module.exports = app;