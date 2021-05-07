import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import Books from "./Books";
import {addBook, deleteBook} from "../../Redux/books_actions";


const BooksContainer = ({books, addBook, deleteBook}) => {
    return <Books books={books} addBook={addBook} deleteBook={deleteBook}/>
}

const mapStateToProps = (state) => ({
    books: state.firestore.ordered.books,
})

export default compose(
    firestoreConnect(() => ['books']),
    connect(mapStateToProps, {addBook, deleteBook}),
)(BooksContainer);