// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASipTJCkCw-RXZQnCowkt1uHnW-pKdceE",
    authDomain: "react-blog-5f0e8.firebaseapp.com",
    projectId: "react-blog-5f0e8",
    storageBucket: "react-blog-5f0e8.appspot.com",
    messagingSenderId: "295848138917",
    appId: "1:295848138917:web:52471fd413f1f60a30554c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }
