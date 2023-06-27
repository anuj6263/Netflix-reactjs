import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCRPSzayaPXfEMXxzvPBbbTFWtin62N6aA",
    authDomain: "netflix-clone-752c2.firebaseapp.com",
    projectId: "netflix-clone-752c2",
    storageBucket: "netflix-clone-752c2.appspot.com",
    messagingSenderId: "188620307881",
    appId: "1:188620307881:web:66fdf745f8271f574cd8b8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;