// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrDVXIT46Om6FOnK2LxsOslSUF18cRDL4",
  authDomain: "felysia-3e7b6.firebaseapp.com",
  databaseURL:
    "https://felysia-3e7b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "felysia-3e7b6",
  storageBucket: "felysia-3e7b6.appspot.com",
  messagingSenderId: "247429742198",
  appId: "1:247429742198:web:1c81a989b611936042e957",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
