import React from 'react';

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
        </div>
    );
};

export default Book;