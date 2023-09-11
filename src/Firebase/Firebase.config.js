// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqlsd7Wt1AEylOSgUlgatzHv5SQNKC7LY",
  authDomain: "recipe-haven-bd.firebaseapp.com",
  projectId: "recipe-haven-bd",
  storageBucket: "recipe-haven-bd.appspot.com",
  messagingSenderId: "383182539591",
  appId: "1:383182539591:web:feab7c0293473681685a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;