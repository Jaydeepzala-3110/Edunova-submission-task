import React, { useState } from 'react';
import axios from 'axios';
import { apiBaseUrl } from '../utils/api';


const ViewIssuedBooks = () => {
    const [userId, setUserId] = useState('');
    const [issuedBooks, setIssuedBooks] = useState([]);
    const [error, setError] = useState('');

    const handleViewIssuedBooks = async () => {
        try {
            const response = await axios.get(`${apiBaseUrl}/user-books?userId=${userId}`);
            setIssuedBooks(response.data || []);
            setError('');
        } catch (error) {
            setError(error.response?.data?.message || 'Error retrieving issued books.');
            setIssuedBooks([]);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">View Issued Books</h2>

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

                <button
                    onClick={handleViewIssuedBooks}
                    className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-all"
                >
                    View Issued Books
                </button>

                {error && (
                    <div className="mt-4 p-3 bg-red-100 text-red-800 text-center rounded-lg">
                        {error}
                    </div>
                )}

                <div className="mt-4">
                    {issuedBooks.length > 0 ? (
                        issuedBooks.map((book) => (
                            <div
                                key={book._id}
                                className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
                            >
                                <h3 className="text-lg font-semibold">
                                    Book Name: <span className="text-blue-600">{book.bookId.bookName}</span>
                                </h3>
                                <p>Category: {book.bookId.category}</p>
                                <p>Rent Per Day: {book.bookId.rentPerDay}</p>
                                <p>Issue Date: {new Date(book.issueDate).toLocaleDateString()}</p>
                                {book.returnDate && (
                                    <p>Return Date: {new Date(book.returnDate).toLocaleDateString()}</p>
                                )}
                                {book.rentCalculated && (
                                    <p className="text-green-600 font-bold">Rent Calculated: {book.rentCalculated}</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-700 text-center mt-4">
                            No issued books found for this user.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewIssuedBooks;
