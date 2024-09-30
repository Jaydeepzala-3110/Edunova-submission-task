import { Link } from 'react-router-dom';

const TransactionPage = () => {
  return (
    <div
      className="relative p-4 h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1701842912302-501bfc88c403?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
      <h1 className="text-3xl font-bold text-white mb-6 text-center relative z-10">
        Welcome to the Transaction Management System
      </h1>
      <p className="text-lg text-white mb-8 text-center relative z-10">
        Here you can issue, return, and manage your books efficiently!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 relative z-10">
        <Link to="/transactions/issue" className="bg-blue-500 text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-400 flex items-center justify-center">
          <span className="text-lg font-semibold">Issue Book</span>
        </Link>
        <Link to="/transactions/return" className="bg-green-500 text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-400 flex items-center justify-center">
          <span className="text-lg font-semibold">Return Book</span>
        </Link>
        <Link to="/transactions/view" className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-400 flex items-center justify-center">
          <span className="text-lg font-semibold">View Issued Books</span>
        </Link>
        <Link to="/transactions/total-rent" className="bg-purple-500 text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-400 flex items-center justify-center">
          <span className="text-lg font-semibold">Total Rent</span>
        </Link>
        <Link to="/transactions/date-range" className="bg-blue-500 text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-400 flex items-center justify-center">
          <span className="text-lg font-semibold">View Issued Books in Date Range</span>
        </Link>
      </div>
    </div>
  );
};

export default TransactionPage;
