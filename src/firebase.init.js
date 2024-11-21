// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMDneTzlCr10JvNN876-JLPPMKf_MSeeY",
  authDomain: "discountpro-d029b.firebaseapp.com",
  projectId: "discountpro-d029b",
  storageBucket: "discountpro-d029b.firebasestorage.app",
  messagingSenderId: "271882011366",
  appId: "1:271882011366:web:26027a05b41f348c907127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
