// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {Firestore, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGJWNzuyYbIOZ0aPEH4KyJ_QC34QU4eyg",
  authDomain: "form-47b7f.firebaseapp.com",
  projectId: "form-47b7f",
  storageBucket: "form-47b7f.appspot.com",
  messagingSenderId: "52001800868",
  appId: "1:52001800868:web:bd3294939aeed9361e1c31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {app, db}