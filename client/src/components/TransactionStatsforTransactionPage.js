import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/authContextProvider";
import axios from "axios";

const TransactionStats = () => {
  const [transactions, setTransactions] = useState([]);
  const [expandedTransactionId, setExpandedTransactionId] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [sortOption, setSortOption] = useState("none");

  const { user, jwtToken } = useContext(AuthContext);
  // console.log(user)
  useEffect(() => {
    if(jwtToken){
      //api update need to be done
      axios
        .get(`http://localhost:4000/user`, {
          headers: {
            Authorization: jwtToken,
          },
        })
        .then((res) => {
          // console.log(res.data.transactions.transactions);
          setTransactions(res.data.transactions.transactions);
        })
        .catch((err) => console.log(err));
    }
  })

  const handleTransactionClick = (transactionId) => {
    setExpandedTransactionId(
      expandedTransactionId === transactionId ? null : transactionId
    );
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredTransactions =
    filterType === "all"
      ? transactions
      : transactions.filter((transaction) => transaction.type === filterType);

  const sortedTransactions = () => {
    switch (sortOption) {
      case "amountAsc":
        return filteredTransactions.sort((a, b) => a.amount - b.amount);
      case "amountDesc":
        return filteredTransactions.sort((a, b) => b.amount - a.amount);
      case "dateAsc":
        return filteredTransactions.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      case "dateDesc":
        return filteredTransactions.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      default:
        return filteredTransactions;
    }
  };

  const formatCurrency = (amount, currency) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      bold: true,
      currency: currency ? currency : "INR",
    });
  };
   const formatDate = (date) => {
     const dateObj = new Date(date);
     return dateObj
       .toISOString()
       .substring(0, 10)
       .split("-")
       .reverse()
       .join("-");
   };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction Page</h1>
      <div className="flex items-center mb-4">
        {/* <label htmlFor="filter" className="mr-2">
          Filter:
        </label>
        <select
          id="filter"
          className="border rounded-md p-1"
          value={filterType}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
        </select> */}
        <label htmlFor="sort" className="ml-4 mr-2">
          Sort By:
        </label>
        <select
          id="sort"
          className="border rounded-md p-1"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="none">None</option>
          <option value="amountAsc">Amount (Low to High)</option>
          <option value="amountDesc">Amount (High to Low)</option>
          <option value="dateAsc">Date (Old to New)</option>
          <option value="dateDesc">Date (New to Old)</option>
        </select>
      </div>
      <ul>
        {sortedTransactions().map((transaction) => (
          <li
            key={transaction.id}
            className={`bg-white shadow-md rounded-md mb-4 p-4 ${
              expandedTransactionId === transaction.id ? "bg-gray-100" : ""
            }`}
            onClick={() => handleTransactionClick(transaction.id)}
          >
            {/* Transaction details */}
            <div className="flex justify-between">
              <div className="font-bold">
                {formatDate(transaction.transactionDate)} - {transaction.description}
              </div>
              <div
                className={`${
                  transaction.type === "add" ? "text-green-500" : "text-red-500"
                }`}
              >
                {transaction.type === "add" ? "+" : "-"}
                {formatCurrency(transaction.amount, transaction.currency)}
              </div>
            </div>
            {expandedTransactionId === transaction.id && (
              <div className="mt-4">
                <p className="font-sans">
                  Transaction Details for ID {transaction.id}
                </p>
                <p>{transaction.additionalDetails}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionStats;





// Transaction data
        // {
        //   id: 1,
        //   date: "2010-01-01",
        //   description: "Transaction 1",
        //   amount: 100,
        //   currency: "USD",
        //   type: "add",
        // },
        // {
        //   id: 2,
        //   date: "2022-01-02",
        //   description: "Transaction 2",
        //   amount: 200,
        //   currency: "EUR",
        //   type: "subtract",
        // },
        // {
        //   id: 3,
        //   date: "2023-01-03",
        //   description: "Transaction 3",
        //   amount: 300,
        //   currency: "GBP",
        //   type: "add",
        // },
        // {
        //   id: 4,
        //   date: "2023-01-02",
        //   description: "Transaction 4",
        //   amount: 200,
        //   currency: "INR",
        //   type: "add",
        // },