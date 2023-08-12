// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFPPBCa3Sy41HxSiJe1e9ToShETJVJeY4",
  authDomain: "movieflix-f101b.firebaseapp.com",
  projectId: "movieflix-f101b",
  storageBucket: "movieflix-f101b.appspot.com",
  messagingSenderId: "387782785139",
  appId: "1:387782785139:web:d84d325ef176d0c07ad206",
  measurementId: "G-5P84DEP81J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
