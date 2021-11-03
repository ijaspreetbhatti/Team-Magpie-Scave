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

    console.log('click');

    const search = document.getElementById("headerSearch");
    const addItem = document.getElementById("listItem");
    const nav = document.getElementById("navItems");
    const logo = document.getElementById("mainLogo");
    const searchInput = document.getElementById("searchInput");
    const enter = document.getElementById("searchSubmit");
    const hamburger = document.getElementById("hamburger");
    const close = document.getElementById("closeSearch");

    const width = screen.width; 

    if (search.style.display === "inherit") {
        search.style.display = "none";
        addItem.style.display = "none";
        nav.style.display = "none";
        logo.style.display = "none";
        hamburger.style.display = "none";

        close.style.display = "block";
        searchInput.style.display = "block";
        enter.style.display = "block";
    } else {

        search.style.display = "inherit";
        addItem.style.display = "inherit";
        nav.style.display = "inherit";
        logo.style.display = "inherit";
        hamburger.style.display = "inherit";

        searchInput.style.display = "none";
        enter.style.display = "none";
        close.style.display = "none";
    }
};

window.toggleSearch = toggleSearch;

function closeSearch() {

    const search = document.getElementById("headerSearch");
    const addItem = document.getElementById("listItem");
    const nav = document.getElementById("navItems");
    const logo = document.getElementById("mainLogo");
    const searchInput = document.getElementById("searchInput");
    const enter = document.getElementById("searchSubmit");
    const hamburger = document.getElementById("hamburger");
    const close = document.getElementById("closeSearch");

    if (search.style.display === "none") {
        search.style.display = "inherit";
        addItem.style.display = "inherit";
        nav.style.display = "inherit";
        logo.style.display = "inherit";
        hamburger.style.display = "inherit";

        searchInput.style.display = "none";
        enter.style.display = "none";
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