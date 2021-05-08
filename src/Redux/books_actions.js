import firestoreCollections from "../consts/firestore_collections";


export const addBook = (book) => async (dispatch) => {
    await firestoreCollections.books().add({...book});
}

export const deleteBook = (bookId) => async (dispatch) => {
    await firestoreCollections.books().doc(bookId).delete();
}