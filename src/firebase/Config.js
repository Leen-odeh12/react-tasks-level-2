// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR8EGOkEE6c-aFhlHjwVEKXwwM1mC3BxM",
  authDomain: "react-2-55964.firebaseapp.com",
  projectId: "react-2-55964",
  storageBucket: "react-2-55964.appspot.com",
  messagingSenderId: "793099262133",
  appId: "1:793099262133:web:ba709e27cd3212f058c6fc"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);