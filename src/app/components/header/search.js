import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';


const searchClient = algoliasearch('W5144GWNC7', '007a65abffcee913949d61c3aa980ed8');
const index = searchClient.initIndex('Scave');

const search = instantsearch({
  indexName: 'Scave',
  searchClient,
});

// only query string

document.getElementById('searchSubmit').addEventListener('click', () => {
    searchFunc();
    console.log('searched');
})

const searchFunc = () => {
        let searchItem = document.getElementById('searchInput').value;

        index.search(searchItem).then(({ hits }) => {
        console.log(hits);
        console.log('searching')
    });
}


search.start();


// Search input display and hide functions and Nav Display Func

// Main Varibales for funcs
const leftNav = document.getElementById('leftNav');
const search = document.getElementById("headerSearch");
const addItem = document.getElementById("listItem");

const searchInput = document.getElementById("searchInput");
const enter = document.getElementById("searchSubmit");
const close = document.getElementById("closeSearch");

function toggleSearch(leftNav, search, addItem, searchInput, enter, close) {

    const width = window.matchMedia("(min-width: 1000px)");

    console.log('click');

    if (!width.matches && search.style.display === "flex") {
        search.style.display = "none";
        addItem.style.display = "none";
        leftNav.style.display = "none";

        close.style.display = "block";
        searchInput.style.display = "block";
        enter.style.display = "block";
    } else {
        search.style.display = "flex";
        addItem.style.display = "flex";
        leftNav.style.display = "flex";

        searchInput.style.display = "none";
        enter.style.display = "none";
        close.style.display = "none";
    }
};

window.toggleSearch = toggleSearch(leftNav, search, addItem, searchInput, enter, close);

function closeSearch(leftNav, search, addItem, searchInput, enter, close) {

    const width = window.matchMedia("(min-width: 1000px)");

    if (!width.matches && search.style.display === "none") {
        search.style.display = "flex";
        addItem.style.display = "flex";
        leftNav.style.display = "flex";

        searchInput.style.display = "none";
        enter.style.display = "none";
        close.style.display = "none";
    } else if(width.matches) {
        search.style.display = "none";
        addItem.style.display = "flex";
        leftNav.style.display = "flex";
        
        searchInput.style.display = "flex";
        enter.style.display = "flex";
        close.style.display = "none";
    }
}

window.closeSearch = closeSearch(leftNav, search, addItem, searchInput, enter, close);

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
function headerFix(width, leftNav, search, addItem, searchInput, enter, close) {

    if (width.matches) { // If media query matches
        leftNav.style.display = "flex";
        search.style.display = "none";
        addItem.style.display = "flex";

        searchInput.style.display = "flex";
        enter.style.display = "flex";
        close.style.display = "none";
    } else if (!width.matches && search.style.display === "none") {
        search.style.display = "flex";
        leftNav.style.display = "flex";
        addItem.style.display = "flex";

        searchInput.style.display = "none";
        enter.style.display = "none";
        close.style.display = "none";
    }
}

const width = window.matchMedia("(min-width: 1000px)");

headerFix(width, leftNav, search, addItem, searchInput, enter, close);

width.addListener(headerFix)