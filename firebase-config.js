// Firebase Configuration
import { firebaseConfig } from './config.js';

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, getDocs, deleteDoc, doc, setDoc, updateDoc, increment, getDoc, serverTimestamp }
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot, query, orderBy, getDocs, deleteDoc, doc, setDoc, updateDoc, increment, getDoc, serverTimestamp };
