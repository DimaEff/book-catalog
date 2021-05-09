import React from 'react';
import {Link} from "react-router-dom";

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
            <Link to={`/add-edit-book/${props.id}`}>Edit this book</Link>
            <hr/>
        </div>
    );
};

export default Book;