// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWPpyWHxGU-mRHwGg9uzqAMP6kM-vLY5Y",
  authDomain: "pause-studio-9ea96.firebaseapp.com",
  projectId: "pause-studio-9ea96",
  storageBucket: "pause-studio-9ea96.firebasestorage.app",
  messagingSenderId: "3168913128",
  appId: "1:3168913128:web:30b44700ec7cf34b14ab5d",
  measurementId: "G-GJ86K5K7MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };