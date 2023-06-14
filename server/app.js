const express = require("express");
const path = require("path");
const userRoute = require("./routes/user/userRoutes");
const transactionRoute = require('./routes/expense/expenseRoutes');
const { isAuthenticated } = require('./middlewares/auth')
var cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/user", userRoute);
app.use("/transaction", transactionRoute)

app.get("/auth/protected", isAuthenticated, (req, res) => {
  console.log(req.user);
  res.send(`Welcome bro`);
});

module.exports = app;
