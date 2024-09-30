import React, { useState } from 'react';
import axios from 'axios';

const IssuedBooksInRange = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [issuedBooks, setIssuedBooks] = useState([]);
    const [error, setError] = useState('');

    const handleIssuedBooksInRange = async () => {
        try {
            const response = await axios.get('http://localhost:3000/date-range', {
                params: {
                    startDate,
                    endDate,
                },
            });
            setIssuedBooks(response.data || []);
            setError('');
        } catch (error) {
            setError(error.response?.data?.message || 'Error retrieving books in date range.');
            setIssuedBooks([]);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Issued Books in Date Range</h2>

            <div className="mb-4">
                <label className="block mb-2">Start Date</label>
                <input
                    type="date"
                    className="border p-2 w-full"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">End Date</label>
                <input
                    type="date"
                    className="border p-2 w-full"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>

            <button
                onClick={handleIssuedBooksInRange}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all"
            >
                View Issued Books
            </button>

            {issuedBooks.length > 0 && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {issuedBooks.map((issuedBook) => (
                        <div key={issuedBook._id} className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-2">{issuedBook.bookId.bookName}</h3>
                            <p className="text-gray-600">Issued to: {issuedBook.userId.name}</p>
                            <p className="text-gray-600">Issue Date: {new Date(issuedBook.issueDate).toDateString()}</p>
                            <p className="text-gray-600">Category: {issuedBook.bookId.category}</p>
                            <p className="text-gray-600">Rent per Day: ${issuedBook.bookId.rentPerDay}</p>
                        </div>
                    ))}
                </div>
            )}

            {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded">
                    {error}
                </div>
            )}
        </div>
    );
};

export default IssuedBooksInRange;
