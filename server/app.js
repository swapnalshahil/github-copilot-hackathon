const express = require('express');
const userRoute = require('./routes/users/userRoutes');

const app = express();


app.use(logger);

// routes
// app.post('/register' , registerUser)
app.use('/', userRoute)

module.exports = app;