const {
  findTransactionById,
  createNewTransaction,
  updateTransactionDetails,
  deleteTransactionById,
} = require("../../Repository/TransactionRepository");

const transactionDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await findTransactionById(id);
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      _id,
      title,
      description,
      sourceUser,
      destinationUser,
      amount,
      transactionDate,
    } = req.body;
    const transaction = await createNewTransaction({
      _id,
      title,
      description,
      sourceUser,
      destinationUser,
      amount,
      transactionDate,
    });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      _id,
      title,
      description,
      sourceUser,
      destinationUser,
      amount,
      transactionDate,
    } = req.body;
    const transaction = await findTransactionById(id);
    const updatedTransaction = await updateTransactionDetails(transaction, {
      _id,
      title,
      description,
      sourceUser,
      destinationUser,
      amount,
      transactionDate,
    });
    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTransactionById(id);
    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  transactionDetails,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
