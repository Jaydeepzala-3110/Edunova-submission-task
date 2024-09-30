import React, { useState } from 'react';
import axios from 'axios';
import { apiBaseUrl } from '../utils/api';

const ReturnBook = () => {
  const [transactionId, setTransactionId] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [transactionResult, setTransactionResult] = useState('');
  const [rent, setRent] = useState(null);
  const [error, setError] = useState('');

  const handleReturnBook = async () => {
    try {
      const response = await axios.post(`${apiBaseUrl}/return`, {
        transactionId,
        returnDate,
      });

      setTransactionResult(response.data.message || 'Book returned successfully.');
      setRent(response.data.rent || null); 
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Error returning book.');
      setTransactionResult('');
      setRent(null); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Return Book</h2>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Transaction ID</label>
          <input
            type="text"
            placeholder="Enter Transaction ID"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Return Date</label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        <button
          onClick={handleReturnBook}
          className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-all"
        >
          Return Book
        </button>

        {transactionResult && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 text-center rounded-lg">
            {transactionResult}
            {rent !== null && (
              <div className="mt-2 text-green-600">
                Rent: {rent}
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-800 text-center rounded-lg">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReturnBook;
