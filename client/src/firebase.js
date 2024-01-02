// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-501dd.firebaseapp.com",
  projectId: "mern-estate-501dd",
  storageBucket: "mern-estate-501dd.appspot.com",
  messagingSenderId: "616127664996",
  appId: "1:616127664996:web:67b1dc6b0051a65021a071"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);