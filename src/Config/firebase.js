// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIXZgzb0r6NLRkukP3JwnWDze1WBXMkHs",
  authDomain: "cwf-now.firebaseapp.com",
  projectId: "cwf-now",
  storageBucket: "cwf-now.appspot.com",
  messagingSenderId: "155560680046",
  appId: "1:155560680046:web:1692a55428aedd76aa647f",
  measurementId: "G-VQB63Z304S",
  databaseURL:' https://cwf-now-default-rtdb.firebaseio.com/'

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);

export{analytics, auth, storage, database}