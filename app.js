const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./Config/db');
const config = require('./Config/config');
const indexRoute = require('./Routes/index');
const apiRouter = require('./Routes/api');

// connect to database
connectDB();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//To allow cross-origin requests
//app.use(cors());

// Routes Prefixes
app.use('/', indexRoute);
app.use("/api/", apiRouter);

// Start the server
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});

// throw 404 if URL not found
// app.all("*", function(req, res) {
//     return apiResponse.notFoundResponse(res, "Page not found");
// });