import Cookies from 'js-cookie';
import {userIdToken} from "../consts/cookies_consts";
import firestoreCollections from "../consts/firestore_collections";


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

export const authUser = () => async (dispatch) => {
    const userId = Cookies.get(userIdToken);

    if (userId) {
        const doc = await firestoreCollections.users().doc(userId).get();
        const user = doc.data();

        user && dispatch(setUser(user));
    }
}

export const loginUser = ({email, password}) => async (dispatch) => {
    const doc = await firestoreCollections.users()
        .where("email", "==", email)
        .where('password', '==', password)
        .get();

    const user = doc.docs[0]?.data();
    const userId = doc.docs[0].id;

    if (user) {
        dispatch(setUser(user));
        Cookies.set(userIdToken, userId, {expires: 10});
        console.log(Cookies.get(userIdToken));
    } else {
        console.log('Not login');
    }
}

export const logoutUser = () => async (dispatch) => {
    dispatch(removeUser());
    Cookies.remove(userIdToken);
}

export const registerUser = (newUser) => async (dispatch) => {
    const testUser = (await firestoreCollections.users()
        .where('email', '==', newUser.email)
        .get())
        .docs?.[0];

    testUser || firestoreCollections.users().add({...newUser});
}

const setUser = (user) => ({type: LOGIN, user});
const removeUser = () => ({type: LOGOUT});

export default authReducer;