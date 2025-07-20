import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

console.log("=== FIREBASE CONFIG LOADING ===");

// Firebase configuration from Vercel environment variables
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

console.log("Successfully loaded Firebase config from environment variables");
console.log("Project ID:", firebaseConfig.projectId);
console.log("Auth Domain:", firebaseConfig.authDomain);

// Check if config looks valid
if (!firebaseConfig.projectId || firebaseConfig.projectId === "your-project-id") {
  console.warn("⚠️ Firebase config appears to use placeholder values!");
}

console.log("=== INITIALIZING FIREBASE ===");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("✅ Firebase app initialized");

// Initialize Firestore
export const db = getFirestore(app);
console.log("✅ Firestore initialized");

// Initialize Firebase Auth
export const auth = getAuth(app);
console.log("✅ Firebase Auth initialized");

console.log("=== FIREBASE SETUP COMPLETE ===");

export default app;
