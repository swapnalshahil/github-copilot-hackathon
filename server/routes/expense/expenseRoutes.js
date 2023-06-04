const express = require("express");
const {
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../../controllers/expense/expensecontrol");
const {isAuthenticated} = require('../../middlewares/auth')

const transactionRoute = express.Router();

transactionRoute.post("/create",isAuthenticated, createTransaction);
transactionRoute.delete("/delete/:id",isAuthenticated, deleteTransaction);
transactionRoute.put("/update/:id",isAuthenticated, updateTransaction);

module.exports = transactionRoute;
