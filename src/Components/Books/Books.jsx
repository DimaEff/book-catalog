import React from 'react';
import Book from "./Book";
import {Grid} from "@material-ui/core";


const Books = ({books, user, deleteBook}) => {
    const showActions = !!user;
    const displayBooks = books &&
        books.map(book => <Book key={book.id} deleteBook={deleteBook} showActions={showActions} {...book}/>);

    return (
        <Grid container spacing={4}>
            {displayBooks}
        </Grid>
    );
};

export default Books;