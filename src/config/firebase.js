import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyBZvhmAp9WlnW4HuyZryBsrNtgKjqK-QTw",
  authDomain: "noscissorsnovember.firebaseapp.com",
  projectId: "noscissorsnovember",
  storageBucket: "noscissorsnovember.appspot.com",
  messagingSenderId: "1003753890141",
  appId: "1:1003753890141:web:1a269134b9f6f88bb6c8b4"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
