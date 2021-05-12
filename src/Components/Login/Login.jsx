import React from 'react';
import {connect} from "react-redux";
import * as yup from 'yup';

import {loginUser} from "../../Redux/auth_reducer";
import DialogForm from "../Common/DialogForm/DialogForm";


const Login = ({loginUser}) => {
    // const test = () => {
    //     alert('successful')
    // }

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('Email should have correct format.')
            .required('Email is a required field.'),

        password: yup
            .string()
            .min(6, 'The minimum password length is 6 symbols')
            .required('Password is a required field.')
    })


    return (
        <DialogForm onSubmit={loginUser} yupSchema={schema}>
            {{
                fields: [
                    {fieldName: 'email'},
                    {fieldName: 'password', type: 'password'},
                ],
                buttons: [
                    {text: 'Log in', onClick: 'submit'},
                    // {text: 'Test', onClick: test},
                    {text: 'Close', onClick: 'close'},
                ]
            }}
        </DialogForm>
    )
}

export default connect(null, {loginUser})(Login);