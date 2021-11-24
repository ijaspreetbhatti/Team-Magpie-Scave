let distance;

window.listDistance = (lat, lng) => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

            const latInput = lat;
            const lngInput = lng;

            let mk1 = { lat: latInput, lng: lngInput };
            let mk2 = pos;

            let distance = haversine_distance(mk1, mk2);
            console.log("Distance between markers: " + distance.toFixed(2) + " km.");

            // listings[i].distance = distance;
            function haversine_distance(mk1, mk2) {
                let R = 6371.0710; // Radius of the Earth in miles
                let rlat1 = mk1.lat * (Math.PI / 180);
                // Convert degrees to radians
                let rlat2 = mk2.lat * (Math.PI / 180);
                // Convert degrees to radians
                let difflat = rlat2 - rlat1; // Radian difference (latitudes)
                let difflon = (mk2.lng - mk1.lng)
                    * (Math.PI / 180); // Radian difference (longitudes)

                let d = 2 * R
                    * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2)
                        + Math.cos(rlat1) * Math.cos(rlat2)
                        * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
                return d;
            }

            getRenderableDistance(distance);
        },
    ); 
     } else {
            console.log('location error');
        }
    } 

    

window.populateListings = () => {
    let listForView = listings;
    console.log(filterObj)
    if(filterObj.category.length > 0) {
        listForView = listForView.filter(listing => filterObj.category.includes(listing.category));
    }
    if (filterObj.condition.length > 0 ) {
        listForView = listForView.filter(listing => filterObj.condition.includes(listing.condition));
    }
    listContainer.innerHTML = '';
    listForView.forEach(function (listing) {
        const firstImg = listing.img;
        listContainer.innerHTML += `
        <div class="list-card" onclick="loadDetails(${listing.lat},${listing.lng})">
            <div class="list-info">
            <div class="list-sub-info">
                <h3>${listing.title}</h3>
                <span class="category">${categoryList[listing.category]}</span>
                <span>・</span>
                <span class="condition">${conditionList[listing.condition]}</span>
            </div>
            <span class="distance">${listDistance(listing.lat, listing.lng)}</span>
            </div>
            <div class="img">
                <img src="${firstImg[0]}" />
            </div>
        </div>
        `;
    });
    console.log('List to print', listForView)
    hideAllMarkers();
    deployMarkers(listForView);
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

function toggleFilter() {
    const filterView = document.getElementById('filterOverlay');

    if(filterView.style.display === 'none') {
        filterView.style.display = 'flex';
    } else {
        filterView.style.display = 'none';
    }
};

document.getElementById("filterBtn").addEventListener("click", () => {
    toggleFilter();
});

document.getElementById("listBtn").addEventListener("click", () => {
    location.hash = "listView";
});

document.getElementById("mapBtn").addEventListener("click", () => {
    location.hash = "mapView";
});

// document.addEventListener('click', function(event) {
//     const listDisplay = document.getElementById('listView');

//     const elementArea = listDisplay.contains(event.target);
//     // const width = window.matchMedia("(max-width: 1000px)");

//     if(!elementArea) {
//         location.hash = "mapView";
//     } 
// });

// function toggleList() {
//     const listDisplay = document.getElementById('listView');

//     if (listDisplay.style.display === "none") {
//         location.hash = "mapView";
//     } 
//     //     listDisplay.style.display = "flex";
//     // } else {
//     //     listDisplay.style.display = "none";
//     // }
// };

// function hideList() {
//     $('#listView').hide();
// }