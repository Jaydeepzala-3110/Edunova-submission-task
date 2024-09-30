import express from 'express';
import {
    issueBook,
    returnBook,
    getIssuedBookUsers,
    getTotalRentByBook,
    getBooksIssuedToUser,
    getBooksIssuedInDateRange
} from '../controller/transaction.controller.js';

const router = express.Router();

// Route for issuing a book
router.post('/issue', issueBook);

// Route for returning a book
router.post('/return', returnBook);

// Route for getting issued book users
router.get('/issued', getIssuedBookUsers);

// Route for getting total rent generated by a book
router.get('/total-rent', getTotalRentByBook);

// Route for getting books issued to a user
router.get('/user-books', getBooksIssuedToUser);

// Route for getting books issued in a date range
router.get('/date-range', getBooksIssuedInDateRange);

export default router;