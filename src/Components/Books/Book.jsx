import React from 'react';
import AddEditBook from "../AddEdirBook/AddEditBook";

const Book = (props) => {
    return (
        <div>
            {props.title}
            {props.authors}
            {props.publicDate}
            {props.isbn}
            <div>
                <button onClick={() => props.deleteBook(props.id)}>Delete book</button>
            </div>
            <AddEditBook bookId={props.id}/>
            <hr/>
        </div>
    );
};

export default Book;