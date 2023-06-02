import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import Navbar from '../Navbar/NavBar';
import Categorizedexpenses from './Categorizedexpenses';
// import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);
import Chart from 'chart.js/auto';
const Chart1 = () => {
  const [data] = useState({
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'Expenses',
        backgroundColor: 'rgba(71, 225, 167, 0.5)',
        borderColor: 'rgb(71, 225, 167)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  return (
    <>
    <Navbar></Navbar>
    <CDBContainer>
      <h3 className="mt-5">Cashflow Chart</h3>
      <Line data={data} options={{ responsive: true }} />
      <br />
      
    </CDBContainer>
    <Categorizedexpenses></Categorizedexpenses>
    <br /><br /><br /><br /><br /><br /><br />
    </>
  );
};

export default Chart1;