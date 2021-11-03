import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';

console.log('hello');

const searchClient = algoliasearch('W5144GWNC7', '007a65abffcee913949d61c3aa980ed8');

const search = instantsearch({
  indexName: 'listings',
  searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchInput"
  }),

  hits({
    container: "#searchListings"
  })
]);

// search.start();


function toggleSearch() {


    const width = window.matchMedia("(min-width: 1000px)");

    console.log('click');

    const search = document.getElementById("headerSearch");
    const addItem = document.getElementById("listItem");
    const nav = document.getElementById("navItems");
    const logo = document.getElementById("mainLogo");
    const searchInput = document.getElementById("searchInput");
    const enter = document.getElementById("searchSubmit");
    const hamburger = document.getElementById("hamburger");
    const close = document.getElementById("closeSearch");

    if (!width.matches && search.style.display === "flex") {
        search.style.display = "none";
        addItem.style.display = "none";
        nav.style.display = "none";
        logo.style.display = "none";
        hamburger.style.display = "none";

        close.style.display = "block";
        searchInput.style.display = "block";
        enter.style.display = "block";
    } else {
        search.style.display = "flex";
        addItem.style.display = "flex";
        nav.style.display = "none";
        logo.style.display = "flex";
        hamburger.style.display = "inherit";

        searchInput.style.display = "none";
        enter.style.display = "none";
        close.style.display = "none";
    }
};

window.toggleSearch = toggleSearch;

function closeSearch() {

    const width = window.matchMedia("(min-width: 1000px)");

    const search = document.getElementById("headerSearch");
    const addItem = document.getElementById("listItem");
    const nav = document.getElementById("navItems");
    const logo = document.getElementById("mainLogo");
    const searchInput = document.getElementById("searchInput");
    const enter = document.getElementById("searchSubmit");
    const hamburger = document.getElementById("hamburger");
    const close = document.getElementById("closeSearch");

    if (!width.matches && search.style.display === "none") {
        search.style.display = "flex";
        addItem.style.display = "flex";
        nav.style.display = "none";
        logo.style.display = "flex";
        hamburger.style.display = "inherit";

        searchInput.style.display = "none";
        enter.style.display = "none";
        close.style.display = "none";
    } else if(width.matches) {
        search.style.display = "none";
        addItem.style.display = "flex";
        nav.style.display = "block";
        logo.style.display = "flex";
        hamburger.style.display = "none";

        searchInput.style.display = "flex";
        enter.style.display = "flex";
        close.style.display = "none";
    }
}

window.closeSearch = closeSearch;

const searchIn = () => {
    document.getElementById("searchSubmit").addEventListener("click", function() {
        alert('searched!');
    })
}

window.searchIn = searchIn;

function toggleNav() {

    const nav = document.getElementById("navItems");

    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
};

window.toggleNav = toggleNav;

function headerFix(x) {

    const search = document.getElementById("headerSearch");
    const addItem = document.getElementById("listItem");
    const nav = document.getElementById("navItems");
    const logo = document.getElementById("mainLogo");
    const searchInput = document.getElementById("searchInput");
    const enter = document.getElementById("searchSubmit");
    const hamburger = document.getElementById("hamburger");
    const close = document.getElementById("closeSearch");

    if (width.matches) { // If media query matches
        search.style.display = "none";
        addItem.style.display = "flex";
        nav.style.display = "block";
        logo.style.display = "flex";
        hamburger.style.display = "none";

        searchInput.style.display = "flex";
        enter.style.display = "flex";
        close.style.display = "none";
    } else if (!width.matches && search.style.display === "none") {
        search.style.display = "flex";
        addItem.style.display = "flex";
        nav.style.display = "none";
        logo.style.display = "flex";
        hamburger.style.display = "inherit";

        searchInput.style.display = "none";
        enter.style.display = "none";
        close.style.display = "none";
    }
}

const width = window.matchMedia("(min-width: 1000px)")
headerFix(width) // Call listener function at run time
width.addListener(headerFix) // Attach listener function on state changes