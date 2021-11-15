import "./list.scss";
import { getAllListings } from "../../services/firebase-service";

let listings = [];

getAllListings().then((res) => {
    console.log(res);
    listings = res;
    populateListings();
});

function populateListings() {
    ß
    listings.forEach(function (listing) {
        listContainer.innerHTML += `
        <div class="list-card" onclick="loadDetails(${listing.lat},${listing.lng})">
            <div class="list-info">
            <div class="list-sub-info">
                <h3>${listing.title}</h3>
                <span class="category">${listing.category}</span>
                <span>・</span>
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

let listContainer = document.querySelector(".list-container");

document.getElementById("filterBtn").addEventListener("click", () => { });

document.getElementById("listBtn").addEventListener("click", () => {
    location.hash = "listView";
});

document.getElementById("mapBtn").addEventListener("click", () => {
    location.hash = "mapView";
});
