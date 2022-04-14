// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAzjXKq9L8ZtdbfI3bWZ0zUGu_63P6kbw",
  authDomain: "simple-firebase-e24a5.firebaseapp.com",
  projectId: "simple-firebase-e24a5",
  storageBucket: "simple-firebase-e24a5.appspot.com",
  messagingSenderId: "220133850360",
  appId: "1:220133850360:web:eb4eb26fe7de1ffb48cf0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
