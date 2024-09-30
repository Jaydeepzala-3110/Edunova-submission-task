import express from 'express';
import { addSampleBooks } from '../utils/sampleData.js';
import { createBook , searchBooks , filterBooksByRent , filterBooks, getAllBooks, filterBooksByCategory} from '../controller/books.controller.js';

const router = express.Router();

// Route for searching books by name or term
router.get('/search', searchBooks);

// Route for filtering books by rent range
router.get('/rent', filterBooksByRent);

// Route for filtering books by category, name/term, and rent range
router.get('/filter', filterBooks);

// Route for category filter 
router.get('/category' , filterBooksByCategory)


// create new book
router.post("/api/books", createBook);

// add sample books data
router.post("/api/books/sample", addSampleBooks);

// get All the boosk
router.get("/api/getAllbooks", getAllBooks);


export default router;
