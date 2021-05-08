import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";

import {loginUser, logoutUser} from "../../Redux/auth_reducer";


const Login = ({loginUser, logoutUser}) => {
    const {register, handleSubmit} = useForm({
        method: 'onBlur',
    })

    const login = (formData) => {
        loginUser(formData.email, formData.password);
    }

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(login)}>
                <input type="text" {...register('email')}/>
                <input type="text" {...register('password')}/>
                <button type={'submit'}>Login</button>
            </form>
            <button onClick={logoutUser}>Logout</button>
        </div>
    );
};

export default connect(null, {loginUser, logoutUser})(Login);