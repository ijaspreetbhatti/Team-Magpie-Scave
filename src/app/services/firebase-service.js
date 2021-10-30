import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore/lite";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: "AIzaSyDxn3g5UJHMRp4XBNR1JSpQU2TmRWrNek4",
    authDomain: "test-project-for-firebas-67d41.firebaseapp.com",
    projectId: "test-project-for-firebas-67d41",
    storageBucket: "test-project-for-firebas-67d41.appspot.com",
    messagingSenderId: "334134787184",
    appId: "1:334134787184:web:b24b7c458c484f686ac8b5"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const db = getFirestore(app);