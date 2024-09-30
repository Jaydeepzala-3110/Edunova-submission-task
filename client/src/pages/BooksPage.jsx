import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../component/BookCard';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minRent, setMinRent] = useState(0);
  const [maxRent, setMaxRent] = useState(100);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/getAllbooks`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books', error);
    }
  };

  // Fetch books by search term
  const handleSearch = async () => {
    if (!searchTerm) {
      fetchBooks(); 
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/search`, {
        params: { bookName: searchTerm },
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error searching for books', error);
    }
  };

  // Fetch books by rent range
  const handleRentFilter = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/rent`, {
        params: { minRent, maxRent },
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error filtering books by rent', error);
    }
  };

  // Fetch books by category
  const handleCategoryFilter = async () => {
    if (!category) {
      fetchBooks(); // Fetch all books if no category
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/category`, {
        params: { category },
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error filtering books by category', error);
    }
  };

  // Combined filter
  const handleCombinedFilter = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/filter`, {
        params: {
          category,
          bookName: searchTerm,
          minRent,
          maxRent,
        },
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error filtering books', error);
    }
  };

  const handleFilter = () => {
    handleCombinedFilter();
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by book name"
          className="border p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onBlur={handleSearch}
        />
        <input
          type="number"
          placeholder="Min Rent"
          className="border p-2"
          value={minRent}
          onChange={(e) => setMinRent(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Rent"
          className="border p-2"
          value={maxRent}
          onChange={(e) => setMaxRent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          className="border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onBlur={handleCategoryFilter} 
        />
        <button onClick={handleFilter} className="bg-blue-500 text-white p-2">Filter</button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
