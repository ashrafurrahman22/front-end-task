// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDojVyC-n2xk3Yi5mmK7ZzSQGaLIyXMShE",
  authDomain: "e-shop-9b049.firebaseapp.com",
  projectId: "e-shop-9b049",
  storageBucket: "e-shop-9b049.appspot.com",
  messagingSenderId: "62087720395",
  appId: "1:62087720395:web:eeb17d9d088e09670f5a4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;