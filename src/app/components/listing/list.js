import { getAllListings } from "../../services/firebase-service";

let listings = [];

getAllListings().then((res) => {
    console.log(res);
    listings = res;
    populateListings();
});

function populateListings() {
    listings.forEach(function (listing) {
        const firstImg = listing.img;
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
                <img src="${firstImg[0]}" />
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

//calculate the distance from user to the current Item

// function haversine_distance(mk1, mk2) {
//     var R = 6371.0710; // Radius of the Earth in miles
//     var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
//     var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
//     var difflat = rlat2-rlat1; // Radian difference (latitudes)
//     var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

//     var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
//     return d;
//   }

// Calculate and display the distance between markers
// var distance = haversine_distance(mk1, mk2);
// document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " mi.";
