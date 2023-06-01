import React from 'react'
import Navbar from './Navbar/NavBar';
import TransactionStats from './TransactionStatsforTransactionPage';

function TransactionPage() {
  return (
    <>
      <Navbar />
      <div>
        <TransactionStats />
      </div>
    </>
  );
}

export default TransactionPage