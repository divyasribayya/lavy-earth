// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOvLB8p4Lras8bDt_RNwvrPeEkM3hmlnw",
  authDomain: "lazy-earth.firebaseapp.com",
  projectId: "lazy-earth",
  storageBucket: "lazy-earth.firebasestorage.app",
  messagingSenderId: "191039895848",
  appId: "1:191039895848:web:b463a2ff7e8684eee8381d",
  measurementId: "G-FLR3EDCZQW"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);