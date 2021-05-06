import {db} from "./firestore";


const booksCollection = db.collection('books');

export const addBook = (book) => async (dispatch) => {
    await booksCollection.add({...book});
}

export const deleteBook = (bookId) => async (dispatch) => {
    await booksCollection.doc(bookId).delete();
}