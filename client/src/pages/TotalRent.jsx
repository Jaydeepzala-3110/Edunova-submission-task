import React, { useState } from 'react';
import axios from 'axios';

const TotalRent = () => {
  const [bookId, setBookId] = useState('');
  const [transactionResult, setTransactionResult] = useState('');
  const [error, setError] = useState('');

  const handleTotalRent = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/total-rent?bookId=${bookId}`);
      setTransactionResult(`Total rent: ${response.data.totalRent || 0}`);
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Error calculating total rent.');
      setTransactionResult(''); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Calculate Total Rent</h2>
        
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Book ID</label>
          <input
            type="text"
            placeholder="Enter Book ID"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </div>

        <button
          onClick={handleTotalRent}
          className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-all"
        >
          Calculate Rent
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-800 text-center rounded-lg">
            {error}
          </div>
        )}

        {transactionResult && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 text-center rounded-lg">
            {transactionResult}
          </div>
        )}
      </div>
    </div>
  );
};

export default TotalRent;
