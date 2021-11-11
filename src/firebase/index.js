// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9LVjar_6DecO0qE5p7nZk_Zk-AyV5FnU",
  authDomain: "kalia-accesorios.firebaseapp.com",
  projectId: "kalia-accesorios",
  storageBucket: "kalia-accesorios.appspot.com",
  messagingSenderId: "197550342257",
  appId: "1:197550342257:web:77e8f705e61f5b74d21bd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)


export const getFirebase = () => app;

export { getFirestore };




