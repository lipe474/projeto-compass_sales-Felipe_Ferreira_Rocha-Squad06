import { initializeApp } from "firebase/app";

import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyByaFecCvzaXuHf_tre9L_ex4Ul8RzPgJc",
  authDomain: "projeto-compass-sales.firebaseapp.com",
  projectId: "projeto-compass-sales",
  storageBucket: "projeto-compass-sales.appspot.com",
  messagingSenderId: "116609907726",
  appId: "1:116609907726:web:0c9bb37b85875e0b62105f",
  measurementId: "G-035BQDX3E0"
};

export const app = initializeApp(firebaseConfig, {
  name: "CompassSales"
});

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
