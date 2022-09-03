import { initializeApp } from "firebase/app"
// import { getDatabase } from "firebase/database"
import { getFirestore } from '@firebase/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyBSqL1rwstrnU6hfeVfpAfzl3IBFfydxX8",
    authDomain: "movie-world-skd143.firebaseapp.com",
    projectId: "movie-world-skd143",
    databaseURL: "https://movie-world-skd143-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "movie-world-skd143.appspot.com",
    messagingSenderId: "62117398247",
    appId: "1:62117398247:web:6f463df54ae1f796038442",
    measurementId: "G-3KWJZEYMW4",
};

export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const db = getFirestore(firebaseApp);

