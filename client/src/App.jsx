import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BooksPage from './pages/BooksPage';
import TransactionPage from './pages/TransactionPage';
import Navbar from './component/Navbar';
import IssueBook from './pages/IssueBook';
import ReturnBook from './pages/ReturnBook';
import ViewIssuedBooks from './pages/ViewIssuedBooks';
import TotalRent from './pages/TotalRent';
import IssuedBooksInRange from './pages/IssuedBooksInRange';
import Home from './component/Home';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protecting routes with PrivateRoute */}
        <Route path="/books" element={<PrivateRoute element={<BooksPage />} />} />
        <Route path="/transactions" element={<PrivateRoute element={<TransactionPage />} />} />

        {/* Transaction routing */}
        <Route path="/transactions/issue" element={<PrivateRoute element={<IssueBook />} />} />
        <Route path="/transactions/return" element={<PrivateRoute element={<ReturnBook />} />} />
        <Route path="/transactions/view" element={<PrivateRoute element={<ViewIssuedBooks />} />} />
        <Route path="/transactions/total-rent" element={<PrivateRoute element={<TotalRent />} />} />
        <Route path="/transactions/date-range" element={<PrivateRoute element={<IssuedBooksInRange />} />} />
      </Routes>
    </Router>
  );
}

export default App;
