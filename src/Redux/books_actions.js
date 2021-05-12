import firestoreCollections from "../consts/firestore_collections";


export const addEditBook = (book, bookId=undefined) => async (dispatch) => {
    firestoreCollections.books().doc(bookId).set({...book});
}

export const deleteBook = (bookId) =>  (dispatch) => {
     firestoreCollections.books().doc(bookId).delete();
}