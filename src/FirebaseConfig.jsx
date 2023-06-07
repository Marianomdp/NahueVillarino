import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHufjeMDDjIewps6Uab4e6XO9lC7ywns4",
  authDomain: "nahuel-villarino.firebaseapp.com",
  projectId: "nahuel-villarino",
  storageBucket: "nahuel-villarino.appspot.com",
  messagingSenderId: "630064447471",
  appId: "1:630064447471:web:e1bff56ef33b66b535c01a",
  measurementId: "G-JBWVW9EDRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
