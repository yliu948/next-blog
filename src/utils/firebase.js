// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogblog-5a79f.firebaseapp.com",
  projectId: "blogblog-5a79f",
  storageBucket: "blogblog-5a79f.appspot.com",
  messagingSenderId: "558435338898",
  appId: "1:558435338898:web:37c0d260e292811f2eb44b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
