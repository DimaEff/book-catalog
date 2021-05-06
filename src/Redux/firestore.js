import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {firebaseReducer, getFirebase} from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';


const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
}

firebase.initializeApp({
    apiKey: "AIzaSyD20jWnTFLKJ2Bgtzhl_PBmRqJ9eNHCVF4",
    authDomain: "test-todos-964be.firebaseapp.com",
    projectId: "test-todos-964be",
    storageBucket: "test-todos-964be.appspot.com",
    messagingSenderId: "699972177297",
    appId: "1:699972177297:web:9f053ca380d7d6495b9e30"
});

export const db = firebase.firestore();

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

const initialState = {};
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk.withExtraArgument({getFirebase})),
);

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
};

export default store;