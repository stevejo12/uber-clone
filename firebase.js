import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7bideqsu7eONAdd0_sMY0oK1UHGPpH8Q",
  authDomain: "uber-clone-nextjs.firebaseapp.com",
  projectId: "uber-clone-nextjs",
  storageBucket: "uber-clone-nextjs.appspot.com",
  messagingSenderId: "694402440302",
  appId: "1:694402440302:web:a9a50ace9db5fd5674da7f",
  measurementId: "G-QN53W548GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
