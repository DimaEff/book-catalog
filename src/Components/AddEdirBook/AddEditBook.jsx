import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from 'react-router-dom';

import {addEditBook} from "../../Redux/books_actions";
import {useForm} from "react-hook-form";


const AddEditBook = ({addEditBook, ...props}) => {
    const {register, handleSubmit} = useForm({
        mode: "onBlur",
    })
    const bookId = props.match.params.bookId;

    const addEdit = (formData) => {
        addEditBook(formData, bookId)
    }

    return (
        <div>
            title
            <form onSubmit={handleSubmit(addEdit)}>
                <input type="text" {...register('title')}/>
                <button>Add/Edit</button>
            </form>
        </div>
    );
};

export default compose(
    withRouter,
    connect(null, {addEditBook}),
)(AddEditBook);
