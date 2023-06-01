import React from "react";
import { Pie } from "react-chartjs-2";
import TransactionList from "./Transactions";

const Dashboard = () => {
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
      <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div className="text-gray-500 text-sm mb-2">Current Balance</div>
        <div className="text-2xl text-blue-500 font-semibold">INR 500</div>
      </div>
      <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div className="text-gray-500 text-sm mb-2">Amount Spent</div>
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
