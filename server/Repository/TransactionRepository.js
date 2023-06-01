const Transactions= require("../Schemas/TransactionSchema");

const createNewTransaction = (details) => {
    const transaction = new Transactions();
    Object.entries(details).forEach(([key, value]) => {
        if (key in transaction) {
            transaction[key] = value;
        }
      });
    await transaction.save();
    return transaction;
};  
const findTransactionById = async (id) => {
  return await Transactions.findById(id);
};
const deleteTransactionById = async (id) => { 
    return await findTransactionById(id).remove();
}
const updateTransactionDetails = async (transaction, details) => {
  Object.entries(details).forEach(([key, value]) => {
    if (key in transaction) {
        transaction[key] = value;
    }
  });
  await transaction.save();
  return transaction;
};

exports.createNewTransaction = createNewTransaction;
exports.findTransactionById = findTransactionById;
exports.deleteTransactionById = deleteTransactionById;
exports.updateTransactionDetails = updateTransactionDetails;
