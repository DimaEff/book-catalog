import firestoreCollections from "../consts/firestore_collections";


export const addEditBook = (book, bookId=undefined) => async (dispatch) => {
    const testBook = !bookId && await firestoreCollections.books()
        .where('isbn', '==', book.isbn || 'test')
        .get()
        .docs?.[0];

     testBook || firestoreCollections.books().doc(bookId).set({...book});
}

export const deleteBook = (bookId) =>  (dispatch) => {
     firestoreCollections.books().doc(bookId).delete();
}