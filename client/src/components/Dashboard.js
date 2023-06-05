import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import AddMoneyModal from "./Modals/AddMoneyModal";
import RemoveMoneyModal from "./Modals/RemoveMoneyModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(500);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [amountToAdd, setAmountToAdd] = useState("");
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [amountToRemove, setAmountToRemove] = useState("");

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAddAmount = (amount) => {
    const newBalance = currentBalance + amount;
    setCurrentBalance(newBalance);
  };

  const handleRemoveAmount = (amount) => {
    const newBalance = currentBalance - amount;
    setCurrentBalance(newBalance);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };

  const closeRemoveModal = () => {
    setIsRemoveModalOpen(false);
  };

  const handleAmountChange = (e) => {
    if (isAddModalOpen) {
      setAmountToAdd(e.target.value);
    } else if (isRemoveModalOpen) {
      setAmountToRemove(e.target.value);
    }
  };

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

  // Sample data for the pie chart
  const pieChartData = {
    labels: ["Spent", "Remaining"],
    datasets: [
      {
        data: [75, 25],
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
                  className="inline-flex justify-center items-center px-4 py-2 bg-gray-200 text-sm text-gray-700 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
      <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div className="text-gray-500 text-sm mb-2">Amount Spent</div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/567/661/original/rupee-icon-indian-currency-symbol-illustration-coin-symbol-free-vector.jpg"
          width="100"
          height="100"
          alt="Rupee Icon"
        />
        <div className="text-2xl text-red-500 font-semibold">INR 300</div>
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
    </div>
  );
};

export default Dashboard;
