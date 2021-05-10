import React from 'react';
import {connect} from "react-redux";
import * as yup from "yup";

import {registerUser, loginUser} from "../../Redux/auth_reducer";
import DialogForm from "../Common/DialogForm/DialogForm";


const Registration = ({registerUser, loginUser}) => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('Email should have correct format.')
            .required('Email is a required field.'),

        password: yup
            .string()
            .min(6, 'The min password length is 6 symbols')
            .max(15, 'The max password length is 15 symbols')
            .required('Password is a required field.'),

        confirmPassword: yup
            .string()
            .required('Password is a required field.')
            .oneOf([yup.ref("password"), null], "Passwords must match"),

        username: yup
            .string()
            .required('Username is a required field.')
    })

    const registerAndLogin = async (formData) => {
        await registerUser({...formData});
        loginUser({...formData});
    }

    return (
        <DialogForm onSubmit={registerAndLogin} yupSchema={schema}>
            {{
                fields: [
                    {fieldName: 'email'},
                    {fieldName: 'password'},
                    {fieldName: 'confirmPassword'},
                    {fieldName: 'username'},
                    {fieldName: 'avatarURL'},
                ],
                buttons: [
                    {text: 'Sign up', onClick: 'submit'},
                    {text: 'Close', onClick: 'close'},
                ]
            }}
        </DialogForm>
    );
};

export default connect(null, {registerUser, loginUser})(Registration);