import React from 'react';

const BookCard = ({ book }) => (

  <div className="border p-4 rounded shadow-md">
    <img src={"https://5.imimg.com/data5/ANDROID/Default/2023/4/300827147/XV/FQ/IO/139116043/product-jpeg-500x500.jpg"} alt={book.bookName} className="w-full h-40 object-cover" /> {/* Corrected this line */}
    <h3 className="text-lg font-bold">{book.bookName}</h3>
    <p>Category: {book.category}</p>
    <p>Rent per day: ${book.rentPerDay}</p>
  </div>
);

export default BookCard;
