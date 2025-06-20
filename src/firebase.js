import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyIeiKHpE2tU26k3Z44-MwEZwnSBq59us",
  authDomain: "greenproject-5c397.firebaseapp.com",
  projectId: "greenproject-5c397",
  storageBucket: "greenproject-5c397.firebasestorage.app",
  messagingSenderId: "580380368977",
  appId: "1:580380368977:web:35c576f5924540f7341870",
  measurementId: "G-5Q5ZXW1NDV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
