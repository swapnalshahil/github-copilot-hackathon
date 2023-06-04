const express = require("express");
const {
  createNewExpense,
  getExpenseById,
  deleteExpenseById,
  updateExpenseDetails,
} = require("../../controllers/expense/expensecontrol");

const expenseRoute = express.Router();

expenseRoute.post("/createnewexpense", createNewExpense);
expenseRoute.get("/getexpensebyid/:id", getExpenseById);
expenseRoute.delete("/deleteexpensebyid/:id", deleteExpenseById);
expenseRoute.put("/updateexpensedetails/:id", updateExpenseDetails);

module.exports = expenseRoute;
