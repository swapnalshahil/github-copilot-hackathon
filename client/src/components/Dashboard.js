import React, { useContext, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import AddMoneyModal from "./Modals/AddMoneyModal";
import RemoveMoneyModal from "./Modals/RemoveMoneyModal";
import AddTransactionModal from "./Modals/AddTransactionModal";
import RemoveTransactionModal from "./Modals/RemoveTransactionModal";
import Modal from "react-modal";
import axios from 'axios';
import { AuthContext } from "../contexts/authContextProvider";

Modal.setAppElement("#root");

const Dashboard = () => {

  const {jwtToken} = useContext(AuthContext)

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSpentDropdown, setShowSpentDropdown] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(500);
  const [amountSpent, setAmountSpent] = useState(300);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] = useState(false);
  const [amountToAdd, setAmountToAdd] = useState("");
  const [transactionToAdd, setTransactionToAdd] = useState("");
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isRemoveTransactionModalOpen, setIsRemoveTransactionModalOpen] = useState(false);
  const [amountToRemove, setAmountToRemove] = useState("");
  const [transactionToRemove, setTransactionToRemove] = useState("");


  useEffect(() => {
    if(jwtToken)
    {
      console.log(jwtToken)
      axios.get('http://localhost:4000/user', {
        headers: {
          'Authorization': jwtToken
        }
      }).then(res => {
        setCurrentBalance(res.data.currentBalance)
        setAmountSpent(
          res.data.transactions.reduce(
            (total, tr) => total + tr.amount, 
            0
          )
        )
      }).catch(e => console.log(e))
    }
  }, [jwtToken])

  // for add amount toggle
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  // for spent amount toggle
  const handleSpentDropdownToggle = () => {
    setShowSpentDropdown(!showSpentDropdown);
  };

  // add amount to current balance card 1
  const handleAddAmount = (amount) => {
    let newBalance = currentBalance +  parseFloat(amount);
    setCurrentBalance(newBalance);
  };

  // remove amount from current balance card 1
  const handleRemoveAmount = (amount) => {
    let newBalance = currentBalance -  parseFloat(amount);
    setCurrentBalance(newBalance);
  };

  // add transaction to spent balance card 2
  const handleAddTransaction = (amount) => {
    if (currentBalance < parseFloat(amount)) {
      console.log(
        "Insufficient balance, Cannot Spent more than current balance"
      );
      return;
    } else {
      const newBalance = currentBalance - parseFloat(amount);
      let newAmountSpent = amountSpent + parseFloat(amount);
      setAmountSpent(newAmountSpent);
      setCurrentBalance(newBalance);
    }

  }

  // remove transaction from spent balance card 2
  const handleRemoveTransaction = (amount) => {
    if (amountSpent < parseFloat(amount)) {
      console.log(
        "Amount Spent is less than the amount to be removed, Cannot remove more than amount spent"
      );
      return;
    } else {
      const newBalance = currentBalance + parseFloat(amount);
      setAmountSpent(amountSpent - parseFloat(amount));
      setCurrentBalance(newBalance);
    }
   
  }

  // open the Add Money modal
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  // close the Add Money modal
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  // open the Remove Money modal
  const openRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };

  // close the Remove Money modal
  const closeRemoveModal = () => {
    setIsRemoveModalOpen(false);
  };

  // open the Add Transaction modal
  const openAddTransactionModal = () => {
    setIsAddTransactionModalOpen(true);
  }

  // close the Add Transaction modal
  const closeAddTransactionModal = () => {
    setIsAddTransactionModalOpen(false);
  }

  // open the Remove Transaction modal
  const openRemoveTransactionModal = () => {
    setIsRemoveTransactionModalOpen(true);
  }

  // close the Remove Transaction modal
  const closeRemoveTransactionModal = () => {
    setIsRemoveTransactionModalOpen(false);
  }

  // handle the amount change event
  const handleAmountChange = (e) => {
    if (isAddModalOpen) {
      setAmountToAdd(e.target.value);
    } else if (isRemoveModalOpen) {
      setAmountToRemove(e.target.value);
    }
  };

  // handle the transaction change event
  const handleTransactionChange = (e) => {
    if (isAddTransactionModalOpen) {
      setTransactionToAdd(e.target.value);
    } else if (isRemoveTransactionModalOpen) {
      setTransactionToRemove(e.target.value);
    }
  }

  // on click of add button in add money modal card 1
  const handleAddButtonClick = () => {
    if (!amountToAdd || isNaN(amountToAdd)) {
      console.log("Invalid amount");
      return;
    }

    const amount = parseFloat(amountToAdd);
    handleAddAmount(amount);
    setAmountToAdd("");
    closeAddModal();
    setShowDropdown(false);
  };

  // on click of remove button in remove money modal card 1
  const handleRemoveButtonClick = () => {
    if (!amountToRemove || isNaN(amountToRemove)) {
      console.log("Invalid amount");
      return;
    }

    const amount = parseFloat(amountToRemove);
    handleRemoveAmount(amount);
    setAmountToRemove("");
    closeRemoveModal();
  };

  // on click of add button in add transaction modal card 2
  const handleAddTransactionButtonClick = () => {
    if (!transactionToAdd || isNaN(transactionToAdd)) {
      console.log("Invalid transaction");
      return;
    }
    const amount = parseFloat(transactionToAdd);
    if (currentBalance < amount) {
      console.log(
        "Insufficient balance, Cannot Spent more than current balance"
      );
      return;
    }
    const newTransaction = {
      amount,
      date: new Date().toISOString(),
    };

    const newBalance = currentBalance - amount;

    // setTransactions([...transactions, newTransaction]);
    setCurrentBalance(newBalance);
    setAmountSpent(amountSpent + amount);
    setTransactionToAdd("");
    closeAddTransactionModal();
    setShowSpentDropdown(false);
  }

  // on click of remove button in remove transaction modal card 2
  const handleRemoveTransactionButtonClick = () => {
    if (!transactionToRemove || isNaN(transactionToRemove)) {
      console.log("Invalid transaction");
      return;
    }

    const amount = parseFloat(amountToRemove);
    handleRemoveTransaction(amount);
    setAmountToRemove("");
    closeRemoveTransactionModal();
  }

  // Sample data for the pie chart
  const pieChartData = {
    labels: ["Spent", "Remaining"],
    datasets: [
      {
        data: [amountSpent, currentBalance],
        backgroundColor: ["#F87171", "#60A5FA"],
        hoverBackgroundColor: ["#F87171", "#60A5FA"],
      },
    ],
  };

  const pieChartOptions = {
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  

  return (
    <div className="container flex flex-wrap justify-center space-x-4">
      <div className="relative">
        <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <div className="text-gray-500 text-sm mb-2">Current Balance</div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/567/661/original/rupee-icon-indian-currency-symbol-illustration-coin-symbol-free-vector.jpg"
            width="100"
            height="100"
            alt="Rupee Icon"
          />
          <div className="text-2xl text-blue-500 font-semibold">
            INR {currentBalance}
          </div>

          <div className="absolute top-0 right-0">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center items-center px-4 py-4 bg-white text-sm text-gray-700 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={handleDropdownToggle}
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {showDropdown && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={openAddModal}
                    >
                      Add Money
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={openRemoveModal}
                    >
                      Remove Money
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Amount Spent */}
      <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between relative">
        <div className="text-gray-500 text-sm mb-2">Amount Spent</div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/567/661/original/rupee-icon-indian-currency-symbol-illustration-coin-symbol-free-vector.jpg"
          width="100"
          height="100"
          alt="Rupee Icon"
        />
        <div className="text-2xl text-red-500 font-semibold">INR {amountSpent}</div>

        <div className="absolute top-0 right-0">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center items-center px-4 py-4 bg-white text-sm text-gray-700 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={handleSpentDropdownToggle}
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {showSpentDropdown && (
              <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={openAddTransactionModal}
                  >
                    Add Transaction
                  </button>
                  {/* <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={openRemoveTransactionModal}
                  >
                    Remove Transaction
                  </button> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Balance Overview */}
      <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div className="text-gray-500 mb-0">Balance Overview</div>
        <div className="flex justify-center">
          <div className="w-55 h-55 max-w-full max-h-full">
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
        </div>
      </div>

      {/* Add Money Modal */}
      <AddMoneyModal
        isOpen={isAddModalOpen}
        closeModal={closeAddModal}
        handleAmountChange={handleAmountChange}
        amountToAdd={amountToAdd}
        handleAddButtonClick={handleAddButtonClick}
      />

      {/* Remove Money Modal */}
      <RemoveMoneyModal
        isOpen={isRemoveModalOpen}
        closeModal={closeRemoveModal}
        handleAmountChange={handleAmountChange}
        amountToRemove={amountToRemove}
        handleRemoveButtonClick={handleRemoveButtonClick}
      />

      {/* Add Transaction Modal */}
      <AddTransactionModal
        isOpen={isAddTransactionModalOpen}
        closeModal={closeAddTransactionModal}
        handleTransactionChange={handleTransactionChange}
        transactionToAdd={transactionToAdd}
        handleAddTransactionButtonClick={handleAddTransactionButtonClick}
      />

      {/* Remove Transaction Modal */}
      <RemoveTransactionModal
        isOpen={isRemoveTransactionModalOpen}
        closeModal={closeRemoveTransactionModal}
        handleTransactionChange={handleTransactionChange}
        transactionToRemove={transactionToRemove}
        handleRemoveTransactionButtonClick={handleRemoveTransactionButtonClick}
      />
    </div>
  );
};

export default Dashboard;
