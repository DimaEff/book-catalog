import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from 'react-router-dom';

import {addEditBook} from "../../Redux/books_actions";
import {useForm} from "react-hook-form";
import MyInput from "../Common/MyInput";
import {Container, makeStyles} from "@material-ui/core";
import MyButton from "../Common/MyButton";
import {useHistory} from "react-router";
import withAuthRedirect from "../../hocs/withAuthRedirect";


const useStyle = makeStyles((theme) => ({
    cover: {
        maxWidth: '250px',
    }
}))

const AddEditBook = ({addEditBook, ...props}) => {
    const styles = useStyle();
    const history = useHistory();

    const {register, handleSubmit, watch} = useForm({
        mode: "onBlur",
    })
    const watchCoverURL = watch('coverURL', false);
    const bookId = props.match.params.bookId;

    const addEdit = async (formData) => {
        formData.authors = formData.authors.split(',');
        await addEditBook(formData, bookId);
        history.push('/');
    }

    return (
        <Container maxWidth={'sm'}>
            <form onSubmit={handleSubmit(addEdit)}>
                <MyInput type="text" label={'Title'} {...register('title')}/>
                <MyInput type="text" label={'Authors'} {...register('authors')}/>
                <MyInput type="text" label={'Public Date'} {...register('publicDate')}/>
                <MyInput type="text" label={'ISBN'} {...register('isbn')}/>
                <MyInput type="text" label={'Cover URL'} {...register('coverURL')}/>
                <div>
                    <img src={watchCoverURL} className={styles.cover}/>
                </div>
                <MyButton type={'submit'}>Add/Edit</MyButton>
                <MyButton variant={'filled'}>Cancel</MyButton>
            </form>
        </Container>
    );
};

export default compose(
    withAuthRedirect,
    withRouter,
    connect(null, {addEditBook}),
)(AddEditBook);
