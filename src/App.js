import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Switch, Route} from 'react-router-dom'

import BooksContainer from "./Components/Books/BooksContainer";
import {authUser} from "./Redux/auth_reducer";
import AddEditBook from "./Components/AddEditBook/AddEditBook";
import Header from "./Components/Header/Header";
import {Box, Container} from "@material-ui/core";


function App({authUser}) {
    useEffect(() => {
        authUser();
    }, [authUser]);

    return (
        <div>
            <Header />
            <Box pt={12}>
                <Container maxWidth={'md'}>
                    <Switch>
                        <Route exact path={'/'} render={() => <BooksContainer/>}/>
                        <Route path={'/add-edit-book/:bookId?'} render={() => <AddEditBook />}/>
                    </Switch>
                </Container>
            </Box>
        </div>
    );
}

export default connect(null, {authUser})(App);