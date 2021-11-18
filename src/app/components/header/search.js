import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';
import * as $ from 'jquery';

// Search Client
const searchClient = algoliasearch('W5144GWNC7', '007a65abffcee913949d61c3aa980ed8');
const index = searchClient.initIndex('Scave');

const search = instantsearch({
  indexName: 'Scave',
  searchClient,
});

// Populate Items
function populateSearch(hits) {
    console.log('populating');
    const container = document.getElementById('searchContainer');
    const title = document.getElementById('yourSearch');
    const searchItem = document.getElementById('searchInput').value;

    if(hits) {
        title.innerHTML = `Search results for "${searchItem}"`;

        hits.forEach(function (hits) {
            // const firstImg = hits.img;
            container.innerHTML += `
            <div class="search-card">
                <div class="search-info">
                <div class="search-sub-info">
                    <h3>${hits.title}</h3>
                    <span class="category">${hits.category}</span>
                    <span>.</span>
                    <span class="condition">${hits.condition}</span>
                </div>
                <span class="distance">${hits.distance}</span>
                </div>
                <div class="img">
                    <img src="${hits.img}" />
                </div>
            </div>
            `;
        }); 
    } else {
        title.innerHTML = `Your search for "${searchItem}" returned no results.`;
        container.innerHTML = "Your search did not return any results.";
    } 
}

// Click event in search input
document.getElementById('searchSubmit').addEventListener('click', () => {
    searchFunc();
    console.log('searched');
})

// Search function
const searchFunc = () => {
        let searchItem = document.getElementById('searchInput').value;

        index.search(searchItem).then(({ hits }) => {
        console.log(hits);
        populateSearch(hits);
    });
}

// declare funcs in window
window.populateSearch = populateSearch;
window.searchFunc = searchFunc;
search.start();


// ********************************************************* //
// Search input display and hide functions and Nav Display Func
// ********************************************************* //

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