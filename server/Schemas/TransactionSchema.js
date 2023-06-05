const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TransactionSchema = mongoose.Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  sourceUser: { type: Schema.Types.ObjectId, required: false, ref: "User" },
  destinationUser: { type: Schema.Types.ObjectId, required: false, ref: "User" },
  amount: { type: Number, default: 0 },
  transactionDate: { type: Date, default: new Date() }
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
