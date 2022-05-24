// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpCLWj12LKm-ycODcpOCM49Ar3ni14BkY",
  authDomain: "last-assignmnet.firebaseapp.com",
  projectId: "last-assignmnet",
  storageBucket: "last-assignmnet.appspot.com",
  messagingSenderId: "34162475531",
  appId: "1:34162475531:web:cf30e01c2be9743476bd0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;