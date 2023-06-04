import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [amountToAdd, setAmountToAdd] = useState("");
  const [currentBalance, setCurrentBalance] = useState(500);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
 const handleAddAmount = () => {
   
   if (!amountToAdd || isNaN(amountToAdd)) {
     console.log("Invalid amount");
     return;
   }

   const amount = parseFloat(amountToAdd);
   
   const newBalance = currentBalance + amount;
   setCurrentBalance(newBalance);

   
   setAmountToAdd(0);
   setShowDropdown(false);
 };


  const handleRemoveAmount = () => {
  
    const newBalance = currentBalance - parseFloat(amountToAdd);
    setCurrentBalance(newBalance);

    setAmountToAdd("");
    setShowDropdown(false);
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
          <img src="https://static.vecteezy.com/system/resources/previews/005/567/661/original/rupee-icon-indian-currency-symbol-illustration-coin-symbol-free-vector.jpg" width="100" height="100"></img>
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
                      onClick={handleAddAmount}
                    >
                      Add Money
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleRemoveAmount}
                    >
                      Add Transaction
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div className="text-gray-500 text-sm mb-2">Amount Spent</div>
        <img src="https://static.vecteezy.com/system/resources/previews/005/567/661/original/rupee-icon-indian-currency-symbol-illustration-coin-symbol-free-vector.jpg" width="100" height="100"></img>
        <div className="text-2xl text-red-500 font-semibold">INR 300</div>
      </div>
      <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div className="text-gray-500 mb-0">Balance Overview</div>
        <div className="flex justify-center">
          <div className="w-55 h-55 max-w-full max-h-full">
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
