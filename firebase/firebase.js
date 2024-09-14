// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdwzbstBJZBi96V2kwhnRsBNma4UjtzIc",
  authDomain: "skillbridge-562004.firebaseapp.com",
  projectId: "skillbridge-562004",
  storageBucket: "skillbridge-562004.appspot.com",
  messagingSenderId: "600180905873",
  appId: "1:600180905873:web:bb5ac26d2782b4fe40ac30",
  measurementId: "G-PJK5H8L9EW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Authentication
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
