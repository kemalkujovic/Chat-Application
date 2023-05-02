import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDaRmdTZnGuvMt4XAaz4tvUbEETp66R_YQ",
  authDomain: "chat-230ac.firebaseapp.com",
  projectId: "chat-230ac",
  storageBucket: "chat-230ac.appspot.com",
  messagingSenderId: "634831047814",
  appId: "1:634831047814:web:022d91383d4ca36f331507",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
