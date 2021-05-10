import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Switch, Route} from 'react-router-dom'

import BooksContainer from "./Components/Books/BooksContainer";
import {authUser} from "./Redux/auth_reducer";
import AddEditBook from "./Components/AddEdirBook/AddEditBook";
import Header from "./Components/Header/Header";
import {Box} from "@material-ui/core";


function App({authUser}) {
    useEffect(() => {
        authUser();
    }, [authUser]);

    return (
        <div>
            <Header />
            <Box mt={9}>
                {/*<Login handleLogin={handleLogin}/>*/}
                <hr/>
                <Switch>
                    <Route exact path={'/'} render={() => <BooksContainer/>}/>
                    <Route path={'/add-edit-book/:bookId?'} render={() => <AddEditBook />}/>
                </Switch>
            </Box>
        </div>
    );
}

export default connect(null, {authUser})(App);