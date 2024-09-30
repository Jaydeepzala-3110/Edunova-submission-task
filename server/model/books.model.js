import { model, Schema } from "mongoose";

// Books Schema
const BooksSchema = new Schema({
    bookName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    rentPerDay: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

// Books Model
const BooksModel = model("Books", BooksSchema);

export default BooksModel;