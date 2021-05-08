import {db} from "../Redux/firestore";


const  firestoreCollections = {
    users: () => db.collection('users'),
    books: () => db.collection('books'),
};

export default firestoreCollections;