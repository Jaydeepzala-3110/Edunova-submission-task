import BooksModel from '../model/books.model.js';

export const createBook = async (req, res) => {
    const { bookName, category, rentPerDay } = req.body;


    if (!bookName || !category || !rentPerDay) {
        return res.status(400).json({
            msg: "Please provide all required fields (bookName, category, rentPerDay)."
        });
    }

    try {
        const newBook = await BooksModel.create({
            bookName,
            category,
            rentPerDay,
        });

        res.status(201).json({
            msg: "Book created successfully",
            book: newBook
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating book", error: error.message });
    }
};

// Search BooksModel by name or term
export const searchBooks = async (req, res) => {
    try {
        const { bookName } = req.query;

        const books = await BooksModel.find({ bookName: { $regex: bookName, $options: 'i' } });

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error searching books', error: error.message });
    }
};

// Filter BooksModel by rent range
export const filterBooksByRent = async (req, res) => {
    try {
        const { minRent, maxRent } = req.query;
        const BooksModel = await BooksModel.find({ rentPerDay: { $gte: minRent, $lte: maxRent } });
        res.status(200).json(BooksModel);
    } catch (error) {
        res.status(500).json({ message: 'Error filtering BooksModel by rent', error: error.message });
    }
};

// Filter BooksModel by category, name/term, and rent range
export const filterBooks = async (req, res) => {
    try {
        const { category, bookName, minRent, maxRent } = req.query;
        const BooksModel = await BooksModel.find({
            category,
            bookName: { $regex: bookName, $options: 'i' },
            rentPerDay: { $gte: minRent, $lte: maxRent }
        });
        res.status(200).json(BooksModel);
    } catch (error) {
        res.status(500).json({ message: 'Error filtering BooksModel', error: error.message });
    }
};

export const getAllBooks = async (req, res) => {
    try {
        const books = await BooksModel.find();
        if (!books.length) {
            return res.status(404).json({ message: 'No books found' });
        }

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
};

// category filter 

export const filterBooksByCategory = async (req, res) => {
    try {
        const { category } = req.query;

        if (!category) {
            return res.status(400).json({ message: 'Category is required' });
        }

        const books = await BooksModel.find({ category: { $regex: category, $options: 'i' } });

        if (!books.length) {
            return res.status(404).json({ message: 'No books found in this category' });
        }

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error filtering books by category', error: error.message });
    }
};