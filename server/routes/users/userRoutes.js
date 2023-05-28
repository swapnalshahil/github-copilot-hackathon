//creating a route for the user
const express = require('express');
const { registerUser } = require('../../controllers/users/userControl');

const userRoute = express.Router();

userRoute.post('/register', registerUser);

module.exports = userRoute;