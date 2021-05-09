import React from 'react';
import Book from "./Book";
import {Link, Switch} from "react-router-dom";

const Books = ({books, addEditBook, deleteBook}) => {
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
            <button onClick={() => addEditBook(book)}>Add book</button>
            <Link to={'/add-edit-book'}>Add new book</Link>
        </div>
    );
};

export default Books;