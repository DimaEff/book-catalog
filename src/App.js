import React, {useEffect} from 'react';
import Cookies from 'js-cookie';
import {connect, useSelector} from "react-redux";
import {Switch, Route, Link} from 'react-router-dom'

import BooksContainer from "./Components/Books/BooksContainer";
import UserProfile from "./Components/UserProfile/UserProfile";
import Login from "./Components/Login/Login";
import {userIdToken} from "./consts/cookies_consts";
import {authUser} from "./Redux/auth_reducer";
import Registration from "./Components/Registration/Registration";
import firestoreCollections from "./consts/firestore_collections";
import AddEditBook from "./Components/AddEdirBook/AddEditBook";


function App({authUser}) {
    useEffect(() => {
        authUser();
    }, [authUser]);

    const users = useSelector((state) => state.auth.user)
    const handleCookie = () => {
        // const test = firestoreCollections.books().doc(undefined)
        // test.set({a: 1});
        console.log([Cookies.get(userIdToken), users]);
    }

    return (
        <div>
            <button onClick={handleCookie}>Test</button>
            <UserProfile/>
            <hr/>
            <Login />
            <hr/>
            <Registration />
            <Switch>
                <Route exact path={'/'} render={() => <BooksContainer/>}/>
                <Route path={'/add-edit-book/:bookId?'} render={() => <AddEditBook />}/>
            </Switch>
        </div>
    );
}

export default connect(null, {authUser})(App);