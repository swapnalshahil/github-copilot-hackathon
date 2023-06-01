// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBBtn,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBCollapse,
// } from 'mdb-react-ui-kit';

// export default function NavBarr() {
//   const [showBasic, setShowBasic] = useState(false);

//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'>Co-pilots</MDBNavbarBrand>

//         <MDBNavbarToggler
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowBasic(!showBasic)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar show={showBasic}>
//           <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Analysis</MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle tag='a' className='nav-link' role='button'>
//                   Sort By
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem link>Date</MDBDropdownItem>
//                   <MDBDropdownItem link>Amount</MDBDropdownItem>
//                   <MDBDropdownItem link>Something else</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true'>
//                 Add Transaction
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>

//           <form className='d-flex input-group w-auto'>
//             <input type='search' className='form-control' placeholder='Search Transaction' aria-label='Search' />
//             <MDBBtn color='primary'>Search</MDBBtn>
//           </form>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-3xl font-bold">Finance Tracker</h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/transaction"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Transaction
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Analytics
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
