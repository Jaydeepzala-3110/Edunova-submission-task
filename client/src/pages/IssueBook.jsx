import React, { useState } from 'react';
import axios from 'axios';

const IssueBook = () => {
    const [bookId, setBookId] = useState('');
    const [userId, setUserId] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [transactionResult, setTransactionResult] = useState('');
    const [error, setError] = useState('');

    const handleIssueBook = async () => {
        try {
            const response = await axios.post('http://localhost:3000/issue', { bookId, userId, issueDate });
            setTransactionResult(response.data.msg || 'Book issued successfully.');
            setError('');
        } catch (error) {
            setError(error.response?.data?.message || 'Error issuing book.');
            setTransactionResult('');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">Issue Book</h2>

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

                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">User ID</label>
                    <input
                        type="text"
                        placeholder="Enter User ID"
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Issue Date</label>
                    <input
                        type="date"
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        value={issueDate}
                        onChange={(e) => setIssueDate(e.target.value)}
                    />
                </div>

                <button
                    onClick={handleIssueBook}
                    className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-all"
                >
                    Issue Book
                </button>

                {transactionResult && (
                    <div className="mt-4 p-3 bg-green-100 text-green-800 text-center rounded-lg">
                        {transactionResult}
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

export default IssueBook;
