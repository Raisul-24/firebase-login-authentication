// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9TD3q7aDmACwXrkV0Z0L9pDjTm38rzfQ",
  authDomain: "login-firbase-33184.firebaseapp.com",
  projectId: "login-firbase-33184",
  storageBucket: "login-firbase-33184.appspot.com",
  messagingSenderId: "498979171073",
  appId: "1:498979171073:web:21bed0d17bed6f8028c900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;