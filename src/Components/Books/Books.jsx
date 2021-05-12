import React, {useState} from 'react';
import {Grid} from "@material-ui/core";

import Book from "./Book";
import firestoreCollections from "../../consts/firestore_collections";


const Books = ({books, user, deleteBook}) => {
    const showActions = !!user;
    const displayBooks = books &&
        books.map(book => <Book key={book.id} deleteBook={deleteBook} showActions={showActions} {...book}/>);

    //Try to do pagination
    // const [testBooks, setTestBooks] = useState([]);
    // const [lastBook, setLastBook] = useState();
    // const test = async () => {
    //     const docs = (await firestoreCollections
    //         .books()
    //         .orderBy('title', 'asc')
    //         .startAfter(lastBook)
    //         .limit(1)
    //         .get())
    //         .docs;
    //
    //     const bs =
    // }

    return (
        <Grid container spacing={4}>
            {displayBooks}
            {/*<button onClick={test}>Set test books</button>*/}
        </Grid>
    );
};

export default Books;