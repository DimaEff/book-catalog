import React, {useEffect} from 'react';
import Cookies from 'js-cookie';
import {connect, useSelector} from "react-redux";

import './App.css';
import BooksContainer from "./Components/Books/BooksContainer";
import UserProfile from "./Components/UserProfile/UserProfile";
import Login from "./Components/Login/Login";
import {userIdToken} from "./consts/cookies_consts";
import {authUser} from "./Redux/auth_reducer";


function App({authUser}) {
    useEffect(() => {
        authUser();
    }, [authUser]);

    const users = useSelector((state) => state.auth.user)
    const handleCookie = () => {
        console.log([Cookies.get(userIdToken), users]);
    }

    return (
        <div>
            <button onClick={handleCookie}>Test</button>
            <UserProfile/>
            <BooksContainer/>
            <Login />
        </div>
    );
}

export default connect(null, {authUser})(App);