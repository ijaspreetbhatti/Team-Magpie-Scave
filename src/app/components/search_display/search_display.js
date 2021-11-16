import "./_search_results.scss";
import { getAllListings } from "../../services/firebase-service";

let listings = [];

getAllListings().then((res) => {
    console.log(res);
    listings = res;
    populateListings();
});

function populateListings() {
    listings.forEach(function (listing) {
        document.getElementById('search-')
        search-container.innerHTML += `
        <div class="search-card" onclick="loadDetails(${listing.lat},${listing.lng})">
            <div class="search-info">
            <div class="search-sub-info">
                <h3>${listing.title}</h3>
                <span class="category">${listing.category}</span>
                <span>.</span>
                <span class="condition">${listing.condition}</span>
            </div>
            <span class="distance">${listing.distance}</span>
            </div>
            <div class="img">
                <img src="${listing.img}" />
            </div>
        </div>
        `;
    });
}

// gets the detials of a selected item using the lat and lng properties
function loadDetails(lat, lng) {
    const obj = listings.find(listing => Number(listing.lat) === lat && Number(listing.lng) === lng);
    if (obj) {
        window.currentItem = obj
        location.replace(`#detailsView`);
        populateListing();
    }
}
// adding loadDetails to the global namespace
window.loadDetails = loadDetails;