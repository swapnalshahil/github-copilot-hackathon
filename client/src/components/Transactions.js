
import React, { useState } from 'react';

const TransactionList = () => {
  const [expandedTransactionId, setExpandedTransactionId] = useState(null);
      const transactions = [
        {
          id: 1,
          date: "2010-01-01",
          description: "Transaction 1",
          amount: 100,
          currency: "USD",
          type: "add",
        },
        {
          id: 2,
          date: "2022-01-02",
          description: "Transaction 2",
          amount: 200,
          currency: "EUR",
          type: "subtract",
        },
        {
          id: 3,
          date: "2023-01-03",
          description: "Transaction 3",
          amount: 300,
          currency: "GBP",
          type: "add",
        },
        {
          id: 4,
          date: "2023-01-02",
          description: "Transaction 4",
          amount: 200,
          currency: "INR",
          type: "add",
        },

        
      ];

  const handleTransactionClick = (transactionId) => {
    if (expandedTransactionId === transactionId) {
      setExpandedTransactionId(null);
    } else {
      setExpandedTransactionId(transactionId);
    }
  };

  return (
    <div className="bg-white w-70vw ml-20 mr-20 p-4 rounded-lg shadow-lg">
      <table className="table-auto bg-white w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <React.Fragment key={transaction.id}>
              <tr
                className="cursor-pointer bg-white hover:bg-gray-100"
                onClick={() => handleTransactionClick(transaction.id)}
              >
                <td className="border px-4 py-2">{transaction.date}</td>
                <td className="border px-4 py-2">{transaction.description}</td>
                <td className="border px-4 py-2">{transaction.amount}</td>
              </tr>
              {expandedTransactionId === transaction.id && (
                <tr>
                  <td className="border px-4 py-2" colSpan="3">
                    <div className="p-4 bg-white">
                      <p>Additional details:</p>
                      <p>{transaction.additionalDetails}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
