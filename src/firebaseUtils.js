import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FB_API_KEY,
  authDomain: import.meta.env.VITE_APP_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FB_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_FB_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const firebaseDatabase = getFirestore(app);
