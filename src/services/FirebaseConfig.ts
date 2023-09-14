// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByaFecCvzaXuHf_tre9L_ex4Ul8RzPgJc",
  authDomain: "projeto-compass-sales.firebaseapp.com",
  projectId: "projeto-compass-sales",
  storageBucket: "projeto-compass-sales.appspot.com",
  messagingSenderId: "116609907726",
  appId: "1:116609907726:web:0c9bb37b85875e0b62105f",
  measurementId: "G-035BQDX3E0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = "pt-br";
export const provider = new GoogleAuthProvider();
