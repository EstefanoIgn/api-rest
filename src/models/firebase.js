// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2yg8V_OTNqf4yEHJXh3jz1fpMs9bFxBE",
  authDomain: "api-rest-node-ba102.firebaseapp.com",
  projectId: "api-rest-node-ba102",
  storageBucket: "api-rest-node-ba102.firebasestorage.app",
  messagingSenderId: "293009185675",
  appId: "1:293009185675:web:d456ded3f21b744defad8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
const db = getFirestore(app)

export {db}