// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx0OJ1tKrTl8XZS7zrLWEKGMLJkowom3Y",
  authDomain: "hackathon-2a8b1.firebaseapp.com",
  projectId: "hackathon-2a8b1",
  storageBucket: "hackathon-2a8b1.firebasestorage.app",
  messagingSenderId: "694631538094",
  appId: "1:694631538094:web:729011f8ca20762eb6fc3f",
  measurementId: "G-FWKFTW7Q6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;