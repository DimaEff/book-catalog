import React from 'react';
import {connect} from "react-redux";

import {addEditBook} from "../../Redux/books_actions";
import {useForm} from "react-hook-form";


const AddEditBook = ({addEditBook, bookId}) => {
    const {register, handleSubmit} = useForm({
        mode: "onBlur",
    })

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

export default connect(null, {addEditBook})(AddEditBook);
