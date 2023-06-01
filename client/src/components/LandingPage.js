import React from 'react'
import NavBar from './Navbar/NavBar'
import Dashboard from './Dashboard'
import TransactionList from './Transactions'

function LandinPage() {
  return (
    <>
      <NavBar />
      <div className="py-8">
        <Dashboard />
      </div>
      <div className=''>
        <TransactionList />
      </div>
    </>
  );
}

export default LandinPage