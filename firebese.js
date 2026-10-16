
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
import {
  getStorage
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";
import {
  getAnalytics,
  isSupported
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeXdYVYPzysn55sMNkj-tXYZJzBv7VFD4",
  authDomain: "bigwin-29967.firebaseapp.com",
  databaseURL: "https://bigwin-29967-default-rtdb.firebaseio.com",
  projectId: "bigwin-29967",
  storageBucket: "bigwin-29967.firebasestorage.app",
  messagingSenderId: "628333876092",
  appId: "1:628333876092:web:8e36daac959c0f42154af9",
  measurementId: "G-654JHXWMEL"
};

// Initialize Firebase only once
const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

// Analytics is optional and may not be supported
let analytics = null;

try {
  if (await isSupported()) {
    analytics = getAnalytics(app);
  }
} catch (error) {
  console.warn("Analytics unavailable:", error.message);
}

export { app, auth, db, storage, analytics };
