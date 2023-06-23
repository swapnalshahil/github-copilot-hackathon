const jwt = require("jsonwebtoken");
const { all } = require("../../app");
const {
  createNewUser,
  findUserByEmail,
  getUserTransactions,
  updateUserDetails
} = require("../../Repository/UserRepository");
// Register
const loginUser = async (req, res) => {
  const { email } = req?.body;
  try {
    // logic to check if user exists then throw error
    // else do registeration
    const jwtSecret = process.env.JWT_SECRET || "secret";
    const userExist = await findUserByEmail(email);
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
  try {
    let email=req.user.email;
    let user=await findUserByEmail(email);
    let allTransactions = await getUserTransactions(user._id);
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
    const monthWiseTransactionsDetail = currentYearTransactions.reduce(
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

// to update the user balance, alter amount (+/-) to increase/decrease the balance
const updateBalance=async(req,res)=>{
try{
let email=req.user.email;
let amount=req.body.amount;
let user=await findUserByEmail(email);
let details={currentBalance: amount};
user=await updateUserDetails(user,details);
res.status(200).json(user);
} catch (error) {
  res.status(500).json({ message: error.message });
}
}

const getUserDetails=async(req,res)=>{
  try{
  let email=req.user.email;
  let user=await findUserByEmail(email);
  const transactions = await getUserTransactions(user._id);
  res.status(200).json({ user, transactions });
  // res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  }
module.exports = { loginUser, getLastYearDetails,updateBalance,getUserDetails };
