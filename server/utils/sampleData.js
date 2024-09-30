import BooksModel from "../model/books.model.js";

const sampleBooks = [
    { bookName: "The Great Gatsby", category: "Fiction", rentPerDay: 2 },
    { bookName: "1984", category: "Dystopian", rentPerDay: 3 },
    { bookName: "To Kill a Mockingbird", category: "Fiction", rentPerDay: 2.5 },
    { bookName: "The Catcher in the Rye", category: "Fiction", rentPerDay: 2.75 },
    { bookName: "The Hobbit", category: "Fantasy", rentPerDay: 3 },
    { bookName: "Fahrenheit 451", category: "Dystopian", rentPerDay: 2.5 },
    { bookName: "Pride and Prejudice", category: "Classic", rentPerDay: 2 },
    { bookName: "The Lord of the Rings", category: "Fantasy", rentPerDay: 4 },
    { bookName: "Brave New World", category: "Dystopian", rentPerDay: 3 },
    { bookName: "The Alchemist", category: "Fiction", rentPerDay: 3 },
    { bookName: "Moby Dick", category: "Classic", rentPerDay: 2.5 },
    { bookName: "War and Peace", category: "Historical", rentPerDay: 3.5 },
    { bookName: "The Picture of Dorian Gray", category: "Classic", rentPerDay: 2.75 },
    { bookName: "Crime and Punishment", category: "Classic", rentPerDay: 2.5 },
    { bookName: "The Odyssey", category: "Classic", rentPerDay: 3 },
    { bookName: "The Brothers Karamazov", category: "Classic", rentPerDay: 2.5 },
    { bookName: "Wuthering Heights", category: "Classic", rentPerDay: 2 },
    { bookName: "The Grapes of Wrath", category: "Classic", rentPerDay: 3 },
    { bookName: "The Chronicles of Narnia", category: "Fantasy", rentPerDay: 3 },
    { bookName: "Little Women", category: "Classic", rentPerDay: 2.5 },
    { bookName: "Catch-22", category: "Satire", rentPerDay: 3 }
];

const sampleBooksJSON = JSON.stringify(sampleBooks, null, 2);

export const addSampleBooks = async (req, res) => {
    try {
        await BooksModel.insertMany(sampleBooks);
        res.status(201).json({ msg: "Sample books added successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error adding sample books", error: error.message });
    }
};
