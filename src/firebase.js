 

import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVS28bDbVbqBAndA-me2PZ2conPSLpyII",
  authDomain: "new-chat-app-8f19e.firebaseapp.com",
  projectId: "new-chat-app-8f19e",
  storageBucket: "new-chat-app-8f19e.appspot.com",
  messagingSenderId: "395026493363",
  appId: "1:395026493363:web:38358c3ecb12cea48165c6",
  measurementId: "G-FV624NF5LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
