import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import Books from "./Books";
import {addEditBook, deleteBook} from "../../Redux/books_actions";


const BooksContainer = ({books, addEditBook, deleteBook}) => {
    return <Books books={books} addEditBook={addEditBook} deleteBook={deleteBook}/>
}

const mapStateToProps = (state) => ({
    books: state.firestore.ordered.books,
})

export default compose(
    firestoreConnect(() => ['books']),
    connect(mapStateToProps, {addEditBook, deleteBook}),
)(BooksContainer);