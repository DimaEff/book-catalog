import React from 'react';
import Book from "./Book";

const Books = ({books, addBook, deleteBook}) => {
    const displayBooks = books &&
        books.map(book => <Book key={book.id} deleteBook={deleteBook} {...book}/>);

    const book = {
        authors: ['123'],
        isbn: '1235324',
        publicDate: 2000,
        title: 'Alpha',
    };

    return (
        <div>
            {displayBooks}
            <button onClick={() => addBook(book)}>Add book</button>
        </div>
    );
};

export default Books;