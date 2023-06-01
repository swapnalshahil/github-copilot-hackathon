import React from 'react'
import NavBarr from './Navbar/NavBar'
import Dashboard from './Dashboard'
import TransactionList from './Transactions'

function LandinPage() {
  return (
    <>
      <NavBarr />
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