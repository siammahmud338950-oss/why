import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBywN6lzJCOxp1_0n5_K3lv2gg3sfXaIyo",
  authDomain: "why-social-app.firebaseapp.com",
  projectId: "why-social-app",
  messagingSenderId: "142428791055",
  appId: "1:142428791055:web:68922f94b2e439471dde7a",
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);