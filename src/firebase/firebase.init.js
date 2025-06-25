// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIXgSHws2ansPZRw7ncbMtefYtVA9yxvo",
  authDomain: "coffee-store-app-b4dfd.firebaseapp.com",
  projectId: "coffee-store-app-b4dfd",
  storageBucket: "coffee-store-app-b4dfd.firebasestorage.app",
  messagingSenderId: "785705369134",
  appId: "1:785705369134:web:4cd0c574bd648b6398a9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);