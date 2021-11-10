import './list.scss';
import {getAllListings} from '../../services/firebase-service';

let listings = [];

getAllListings().then((res) => {
    listings = res;
    populateListings();
})

function populateListings(){
    listings.forEach(function(listing) {
        listContainer.innerHTML += `
        <div class="list-card">
            <div class="list-info">
            <div class="list-sub-info">
                <h3>${listing.title}</h3>
                <span class="category">${listing.category}</span>
                <span>.</span>
                // <span class="condition">${listing.condition}</span>
            </div>
            <span class="distance">${listing.distance}</span>
            </div>
            <div class="img"></div>
        </div>
        `        
    })
}

const goods = [
    {
        title: "Desk1",
        category: "Home Good",
        condition: "Like New",
        distance: "1200m"
    },

    {
        title: "Desk2",
        category: "Home Good",
        condition: "Old",
        distance: "10m"
    },

    {
        title: "Desk3",
        category: "Home Good",
        condition: "Like New",
        distance: "1200m"
    },

    {
        title: "Desk4",
        category: "Home Good",
        condition: "Like New",
        distance: "1200m"
    },

    {
        title: "Desk5",
        category: "Home Good",
        condition: "Like New",
        distance: "1200m"
    }
];

let listContainer = document.querySelector('.list-container');




