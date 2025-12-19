// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0OOowdKknwqwJK6UxcRhI1miuIlbKMgQ",
  authDomain: "dragon-news-react-4f641.firebaseapp.com",
  projectId: "dragon-news-react-4f641",
  storageBucket: "dragon-news-react-4f641.firebasestorage.app",
  messagingSenderId: "940386224658",
  appId: "1:940386224658:web:58557e747d5d8bd71f26cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
