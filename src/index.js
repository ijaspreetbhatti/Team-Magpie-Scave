import './scss/main.scss';
import { database } from "./app/services/firebase-service";
import { collection, getDocs } from 'firebase/firestore/lite';

// Get a list of names from your database
async function getNames(db) {
    const usersCol = collection(db, 'users');
    const namesSnapshot = await getDocs(usersCol);
    const namesList = namesSnapshot.docs.map(doc => doc.data());
    return namesList;
}

getNames(database).then(printNames);

function printNames(namesList) {
    console.log(namesList)
}