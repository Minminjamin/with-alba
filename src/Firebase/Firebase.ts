// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuFUT9MZ0u4dqUVwE5qYVUjrRg6OJVaD0",
  authDomain: "with-alba.firebaseapp.com",
  projectId: "with-alba",
  storageBucket: "with-alba.appspot.com",
  messagingSenderId: "835919914351",
  appId: "1:835919914351:web:556e511815b7645e1b349a",
  measurementId: "G-C74931BTX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default initializeApp(firebaseConfig);