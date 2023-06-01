const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TransactionSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  sourceUser: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  destinationUser: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  amount: { type: Number, default: 0 },
  transactionDate: { type: Date, default: new Date() }
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
