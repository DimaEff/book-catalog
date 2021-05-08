import firestoreCollections from "../consts/firestore_collections";


export const addBook = (book) => async (dispatch) => {
    const testBook = await firestoreCollections.books()
        .where('isbn', '==', book.isbn)
        .get()
        .docs?.[0];

    testBook || firestoreCollections.books().add({...book});
}

export const deleteBook = (bookId) => async (dispatch) => {
    await firestoreCollections.books().doc(bookId).delete();
}