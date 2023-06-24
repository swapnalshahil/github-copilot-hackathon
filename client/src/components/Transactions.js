
import React, { useState, useContext, useEffect } from 'react';
import { FaTrash, FaPenSquare } from "react-icons/fa";
import axios from 'axios';
import { AuthContext } from "../contexts/authContextProvider";
const TransactionList = () => {
  const [transactions, setTransactions] = useState([])
  const {jwtToken} = useContext(AuthContext)
  useEffect(() => {
    if(jwtToken)
    {
      axios.get('http://localhost:4000/user', {
        headers: {
          'Authorization': jwtToken
        }
      }).then(res => {
        setTransactions(res.data.transactions.transactions)
      }).catch(e => console.log(e))
    }
  }, [jwtToken])
  const [expandedTransactionId, setExpandedTransactionId] = useState(null);

  const handleTransactionClick = (transactionId) => {
    if (expandedTransactionId === transactionId) {
      setExpandedTransactionId(null);
    } else {
      setExpandedTransactionId(transactionId);
    }
  };

  const formatDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toISOString().substring(0, 10).split("-").reverse().join("-");
  }

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
                <td className="border px-4 py-2">{transaction.transactionDate}</td>
                <td className="border px-4 py-2">{transaction.description}</td>
                <td className="border px-4 py-2">{transaction.amount}</td>
              </tr>
              {/* {expandedTransactionId === transaction.id && (
                <tr>
                  <td className="border px-4 py-2" colSpan="3">
                    <div className="p-4 bg-white">
                      <p>Additional details:</p>
                      <p>{transaction.additionalDetails}</p>
                      <div>
                        <a href="#">
                          <FaPenSquare style={{ fontSize: "25px" }} />
                        </a>
                        <a href="#">
                          <FaTrash style={{ fontSize: "25px" }} />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              )} */}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
