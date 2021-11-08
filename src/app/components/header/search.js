// import algoliasearch from 'algoliasearch/lite';
// import instantsearch from 'instantsearch.js';
// import { searchBox, hits } from 'instantsearch.js/es/widgets';


// const searchClient = algoliasearch('W5144GWNC7', '007a65abffcee913949d61c3aa980ed8');
// const index = searchClient.initIndex('Scave');

// const search = instantsearch({
//   indexName: 'Scave',
//   searchClient,
// });

// // only query string

// document.getElementById('searchSubmit').addEventListener('click', () => {
//     searchFunc();
//     console.log('searched');
// })

// const searchFunc = () => {
//         let searchItem = document.getElementById('searchInput').value;

//         index.search(searchItem).then(({ hits }) => {
//         console.log(hits);
//         console.log('searching')
//     });
// }


// search.start();


// Search input display and hide functions and Nav Display Func

function toggleSearch() {

    const width = window.matchMedia("(min-width: 1000px)");

    console.log('click');

    const leftNav = document.getElementById('leftNav');
    const search = document.getElementById("headerSearch");
    const addItem = document.getElementById("listItem");

    const searchArea = document.getElementById('search');

    if (!width.matches && search.style.display === "flex") {
        search.style.display = "none";
        addItem.style.display = "none";
        leftNav.style.display = "none";

        searchArea.style.display = 'flex';
    } else {
        search.style.display = "flex";
        addItem.style.display = "flex";
        leftNav.style.display = "flex";

        searchArea.style.display = 'none';
    }
};

window.toggleSearch = toggleSearch;

function closeSearch() {

    const width = window.matchMedia("(min-width: 1000px)");

    const leftNav = document.getElementById('leftNav');
    const search = document.getElementById("headerSearch");
    const addItem = document.getElementById("listItem");

    const searchArea = document.getElementById('search');

    if (!width.matches && search.style.display === "none") {
        search.style.display = "flex";
        addItem.style.display = "flex";
        leftNav.style.display = "flex";

        searchArea.style.display = 'none';
    } else if (width.matches) {
        search.style.display = "none";
        addItem.style.display = "flex";
        leftNav.style.display = "flex";

        searchArea.style.display = 'flex';
    }
}

window.closeSearch = closeSearch;

function toggleNav() {

    const nav = document.getElementById("navItems");

    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
};

window.toggleNav = toggleNav;

// Adjust header display when screen width changes
function headerFix(width) {

    const navItems = document.getElementById('navItems');
    const leftNav = document.getElementById('leftNav');
    const search = document.getElementById("headerSearch");
    const addItem = document.getElementById("listItem");

    const searchArea = document.getElementById('search');

    if (width.matches) { // If media query matches
        leftNav.style.display = "flex";
        search.style.display = "none";
        addItem.style.display = "flex";
        navItems.style.display = "flex";

        searchArea.style.display = 'flex';
    } else if (!width.matches && search.style.display === "none") {
        search.style.display = "flex";
        leftNav.style.display = "flex";
        addItem.style.display = "flex";
        navItems.style.display = "none";

        searchArea.style.display = 'none';
    }
}

const width = window.matchMedia("(min-width: 1000px)");

headerFix(width);

width.addListener(headerFix)

$('#listItem').on('click', () => {
    location.hash = 'addItemView';
})