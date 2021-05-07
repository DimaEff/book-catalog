import {db} from "./firestore";


const LOGIN = 'auth_reducer/LOGIN';
const LOGOUT = 'auth_reducer/LOGOUT';

const initialState = {
    user: null,
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user,
            }

        case LOGOUT:
            return {
                ...state,
                user: null,
            }

        default: return state
    }
}

// const usersCollection = db && db.collection('users');

export const loginUser = (email, password) => async (dispatch) => {
    const doc = await db.collection('users')
        .where("email", "==", email)
        .where('password', '==', password)
        .get();

    const user = doc.docs[0].data();

    user && dispatch(login(user));
}

export const logoutUser = () => async (dispatch) => {
    dispatch(logout());
}

export const register = (newUser) => (dispatch) => {
    db.collection('users').add({...newUser});
}

const login = (user) => ({type: LOGIN, user});
const logout = () => ({type: LOGOUT});

export default authReducer;