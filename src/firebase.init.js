import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBP-4jmqieTyPI5toetLKtHEsrFLaCMZnE",
  authDomain: "discount-pro-b0f31.firebaseapp.com",
  projectId: "discount-pro-b0f31",
  storageBucket: "discount-pro-b0f31.firebasestorage.app",
  messagingSenderId: "798862602338",
  appId: "1:798862602338:web:d80f7ce64d53c0ab0da13b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
