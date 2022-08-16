// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Yd5rPssVs0w6SGg8Rscj0yT6GkUT5F8",
  authDomain: "at-inw.firebaseapp.com",
  projectId: "at-inw",
  storageBucket: "at-inw.appspot.com",
  messagingSenderId: "389416966043",
  appId: "1:389416966043:web:006e790de1354a061bb33e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)