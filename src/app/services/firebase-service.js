import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore/lite";
import { collection, doc, setDoc, getDocs, deleteDoc, getDoc, query, where } from "firebase/firestore/lite";

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

export const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const db = getFirestore(app);

export async function getAllListings() {
    const listingsCollection = collection(db, 'listings');
    const listingsSnapshot = await getDocs(listingsCollection);
    const listingsList = listingsSnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
    });
    return listingsList;
};

export async function getAllKindsListings() {
    console.log('fn : getAllKindsListings')
    // Create a reference to the cities collection
    const listingsCollectionRef = collection(db, "listings");
    const listingsCollectionQuery = query(listingsCollectionRef, where("author", "==", currentUser.email));
    const listingsSnapshot = await getDocs(listingsCollectionQuery);
    const listingsList = listingsSnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
    });

    const archivedListingsCollectionRef = collection(db, "archived_listings");
    const archivedListingsCollectionQuery = query(archivedListingsCollectionRef, where("author", "==", currentUser.email));
    const archivedListingsSnapshot = await getDocs(archivedListingsCollectionQuery);
    const archivedListingsList = archivedListingsSnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data(), archived: true };
    });

    return [ ...listingsList, ...archivedListingsList];
};

export async function saveListing(listing) {
    console.log("Saving");
    const res = await setDoc(doc(collection(db, 'listings')), listing);
    return res;
};

export async function setListingAsCollected(id) {
    return await getDoc(doc(db, 'listings', id)).then((res) => {
        return setDoc(doc(collection(db, 'archived_listings'), id), {...res.data(), collectedBy: currentUser.email}).then((data) => {
            return deleteDoc(doc(db, "listings", id));
        })
    });
};
