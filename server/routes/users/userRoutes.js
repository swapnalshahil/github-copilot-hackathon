//creating a route for the user
const express = require('express');
const { loginUser } = require('../../controllers/users/userControl');

const userRoute = express.Router();

userRoute.post('/login', loginUser);

module.exports = userRoute;