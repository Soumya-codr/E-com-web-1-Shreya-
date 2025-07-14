// Firebase configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjsCb10Psu0b78GxlEbt0O0btlD642VzY",
  authDomain: "e-web-app.firebaseapp.com",
  projectId: "e-web-app",
  storageBucket: "e-web-app.firebasestorage.app",
  messagingSenderId: "84725281860",
  appId: "1:84725281860:web:99f92b4ebb069ba6b83811",
  measurementId: "G-52FX8JRZ5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;