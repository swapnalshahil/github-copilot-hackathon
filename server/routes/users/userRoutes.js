//creating a route for the user
const express = require("express");
const {
  loginUser,
  getLastYearDetails
} = require("../../controllers/users/userControl");
const { isAuthenticated } = require("../../middlewares/auth");

const userRoute = express.Router();

userRoute.post("/login", loginUser);
userRoute.get(
  "/user/lastyeartransactions",
  isAuthenticated,
  getLastYearDetails
);

module.exports = userRoute;
