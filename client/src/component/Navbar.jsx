import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the path as needed

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/books" className="mr-4">Books</Link>
        <Link to="/transactions">Transactions</Link>
      </div>
      <div>
        {user ? (
          <>
            <span className="mr-4">{user.name}</span>
            <button onClick={logout} className="bg-red-500 px-2 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
