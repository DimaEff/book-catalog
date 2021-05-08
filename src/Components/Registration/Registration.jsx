import React from 'react';
import {connect} from "react-redux";

import {registerUser} from "../../Redux/auth_reducer";
import {useForm} from "react-hook-form";


const Registration = ({registerUser}) => {
    const {register, handleSubmit} = useForm({
        mode: 'onBlur',
    })

    const registerNewUser = (formData) => {
        registerUser(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registerNewUser)}>
                <input type="text" {...register('email')}/>
                <input type="text" {...register('password')}/>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('avatarURL')}/>
                <button type={'submit'}>Register</button>
            </form>
        </div>
    );
};

export default connect(null, {registerUser})(Registration);