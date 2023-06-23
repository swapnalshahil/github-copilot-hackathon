const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  currentBalance: { type: Number, default: 0 },
  transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
  password: { type: String },
  profilepicUrl: { type: String, default: "/images/user.jpg" },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
