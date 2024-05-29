const express = require('express');
const studentRouter = require('./student');
const authRouter = require('./auth');
const userRouter = require('./user');
const rankRouter = require('./rank');
const imageRouter = require('./image');
const audioRouter = require('./audio');
const essayRouter = require('./essay');
const professionalRouter = require('./professional')

const app = express();

app.use('/student', studentRouter);
app.use('/user', userRouter);
app.use('/rank', rankRouter);
app.use('/auth', authRouter);
app.use('/image', imageRouter);
app.use('/audio', audioRouter);
app.use('/essay', essayRouter);
app.use('/professional', professionalRouter);

module.exports = app;