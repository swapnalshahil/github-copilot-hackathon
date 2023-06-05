const express = require("express");
const {
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransaction
} = require("../../controllers/expense/expensecontrol");
const {isAuthenticated} = require('../../middlewares/auth')

const transactionRoute = express.Router();
transactionRoute.get("/get/:id",isAuthenticated, getTransaction);
transactionRoute.post("/create",isAuthenticated, createTransaction);
transactionRoute.delete("/delete/:id",isAuthenticated, deleteTransaction);
transactionRoute.put("/update/:id",isAuthenticated, updateTransaction);

module.exports = transactionRoute;
