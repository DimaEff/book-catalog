import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";

import {loginUser} from "../../Redux/auth_reducer";


const Login = ({loginUser}) => {
    const {register, handleSubmit} = useForm({
        method: 'onBlur',
    })

    const login = (formData) => {
        loginUser(formData.email, formData.password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                <input type="text" {...register('email')}/>
                <input type="text" {...register('password')}/>
                <button type={'submit'}>Login</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {loginUser})(Login);