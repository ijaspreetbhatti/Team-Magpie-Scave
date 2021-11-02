import './main.scss';
import { getAllListings } from "./app/services/firebase-service";

(() => {
    getAllListings().then((listings) => {
        console.log(listings);
    });
}) ()


// Get a list of names from your database
// async function getNames(db) {
//     const usersCol = collection(db, 'users');
//     const namesSnapshot = await getDocs(usersCol);
//     const namesList = namesSnapshot.docs.map(doc => doc.data());
//     return namesList;
// }

// getNames(database).then(printNames);

// function printNames(namesList) {
//     console.log('Name List:', namesList);
// }

// const allPages = document.querySelectorAll("div.page");
// allPages[0].style.display="block";
// function navigateToPage(event) {
//     const pageId = location.hash? location.hash : '#page1';
//     for(let page of allPages) {
//         if (pageId === '#'+page.id) {
//             page.style.display = "block";
//         } else {
//             page.style.display = "none";
//         }
//     }
//     return;
// }
// //init handler for hash navigation
// window.addEventListener("hashchange", navigateToPage);

// Variables
let isLoginVisible = false;
let isMapVisible = false;

// (() => {
//     // $("#login").hide();
//     $("#map").hide();
// })()

// document.getElementById('btn1').addEventListener('click', () => {
//     if (isLoginVisible) {
//         $("#login").hide();
//     } else {
//         $("#login").show();
//     }
//     isLoginVisible = !isLoginVisible;
//     console.log('btn1');
// });

// document.getElementById('btn2').addEventListener('click', () => {
//     if (isMapVisible) {
//         $("#map").hide();
//     } else {
//         $("#map").show();
//     }
//     isMapVisible = !isMapVisible;
//     console.log('btn2');
// });

// document.getElementById('btn3').addEventListener('click', () => {
    // console.log(window.location.pathname);
    // history.replaceState({}, 'Gabe', 'helo')
    // $("#btn3").show();
    // $.hide("#btn3");
// });
