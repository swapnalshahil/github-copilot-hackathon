const jwt = require("jsonwebtoken");
const { all } = require("../../app");
const {
  createNewUser,
  findUserByEmail,
  getUserTransactions
} = require("../../Repository/UserRepository");
// Register
const loginUser = async (req, res) => {
  const { email } = req?.body;
  try {
    // logic to check if user exists then throw error
    // else do registeration
    const jwtSecret = process.env.JWT_SECRET || "secret";
    const userExist = findUserByEmail(email);
    if (!userExist) {
      createNewUser({ email });
    }
    const token = jwt.sign(
      {
        data: email,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 // expires in 1 hour
      },
      jwtSecret
    );

    res.status(200).json(token);
  } catch (error) {
    // throw error
    console.log(error);
    res.json(error);
  }
};
const getLastYearDetails = async (req, res) => {
  const { id } = req.body;
  try {
    let allTransactions = await getUserTransactions(id);
    allTransactions = allTransactions.transactions;
    const presentDate = new Date();
    const currentYearTransactions = allTransactions.filter(
      (currentTransaction) => {
        const timeDifference =
          (presentDate.getTime() -
            currentTransaction.transactionDate.getTime()) /
          (1000 * 3600 * 24);
        return timeDifference < 365;
      }
    );
    const monthWiseTransactionsDetail = allTransactions.reduce(
      (reducer, currentTransaction) => {
        const currentTransactionMonth =
          currentTransaction.transactionDate.getMonth();
        reducer[currentTransactionMonth] =
          (reducer[currentTransactionMonth]
            ? reducer[currentTransactionMonth]
            : 0) + currentTransaction.amount;
      },
      {}
    );
    res.status(200).json({ monthWiseDetail: monthWiseTransactionsDetail });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { loginUser, getLastYearDetails };
