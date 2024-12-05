// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIccAd7f64OTvlKalwvnto11T5GyykAd0",
  authDomain: "react-app-journal-93805.firebaseapp.com",
  projectId: "react-app-journal-93805",
  storageBucket: "react-app-journal-93805.firebasestorage.app",
  messagingSenderId: "845422515598",
  appId: "1:845422515598:web:1cfd6f00494be896ea80df"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)