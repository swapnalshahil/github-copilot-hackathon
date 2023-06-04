import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContextProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-500 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-3xl font-bold no-underline">
          Finance Tracker
        </Link>
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300 no-underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/transaction"
              className="text-white hover:text-gray-300 transition duration-300 no-underline"
            >
              Transaction
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              className="text-white hover:text-gray-300 transition duration-300 no-underline"
            >
              Analytics
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-white hover:text-gray-300 transition duration-300 no-underline"
            >
              Profile
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="text-white hover:text-gray-300 transition duration-300 no-underline"
            >
              Logout
            </button>
          </li>
          <li>
            <img
              src={user.picture}
              alt="User"
              className="w-8 h-8 rounded-full ml-2"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
