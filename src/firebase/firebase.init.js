// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQtVdGRnnBztnlP1M1N6YbuLjGYVEfd8A",
  authDomain: "plan-care-tracker-app.firebaseapp.com",
  projectId: "plan-care-tracker-app",
  storageBucket: "plan-care-tracker-app.firebasestorage.app",
  messagingSenderId: "639474605350",
  appId: "1:639474605350:web:275979ad6831d3dd8a35e7"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);