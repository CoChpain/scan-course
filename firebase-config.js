// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA5D5BFipp9sQASM-sgrKZrPCa-BghyiE",
  authDomain: "test-56ccc.firebaseapp.com",
  projectId: "test-56ccc",
  storageBucket: "test-56ccc.firebasestorage.app",
  messagingSenderId: "552598407275",
  appId: "1:552598407275:web:3ec53b521dbef444bd892e",
  measurementId: "G-NF5ED783Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);