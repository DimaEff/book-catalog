import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import Books from "./Books";
import {deleteBook} from "../../Redux/books_actions";


const BooksContainer = ({books, deleteBook, user}) => {
    return <Books books={books} user={user} deleteBook={deleteBook}/>
}

const mapStateToProps = (state) => ({
    books: state.firestore.ordered.books,
    user: state.auth.user,
})

export default compose(
    firestoreConnect(() => [
        {
            collection: 'books',
            orderBy: ['title', 'asc'],
        }
    ]),
    connect(mapStateToProps, {deleteBook}),
)(BooksContainer);