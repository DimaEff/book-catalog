import React from 'react';

import './App.css';
import BooksContainer from "./Components/Books/BooksContainer";
import UserProfile from "./Components/UserProfile/UserProfile";
import Login from "./Components/Login/Login";


function App() {
    return (
        <div>
            <UserProfile/>
            <BooksContainer/>
            <Login />
        </div>
    );
}

export default App;
