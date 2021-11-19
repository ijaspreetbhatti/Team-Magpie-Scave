import { getAllListings } from "../../services/firebase-service";
import * as $ from 'jquery';

let listings = [
    // {
    //     title: "Desk1",
    //     lat: 49.2837282522517,
    //     lng: -123.13221810895666,
    //     icon: "https://res.cloudinary.com/scave2021/image/upload/v1635198526/scave/Component_16_dlxaya.png",
    //     category: "Home Good",
    //     condition: "Like New",
    //     distance: "1200m"
    // },
    // {
    //     title: "Desk2",
    //     lat: 49.274321281824186,
    //     lng: -123.14981339887272,
    //     icon: "https://res.cloudinary.com/scave2021/image/upload/v1635198526/scave/Component_16_dlxaya.png",
    //     category: "Home Good",
    //     condition: "Like New",
    //     distance: "1200m"
    // },
    // {
    //     title: "Desk3",
    //     lat: 49.266648793197206,
    //     lng: -123.10621141215385,
    //     icon: "https://res.cloudinary.com/scave2021/image/upload/v1635198526/scave/Component_16_dlxaya.png",
    //     category: "Home Good",
    //     condition: "Like New",
    //     distance: "1200m"
    // }
];

// Create List Button
function addListView(buttonDiv, map) {
    const listUI = document.createElement("div");
    listUI.className = 'viewBtn';
    listUI.innerHTML = `<h4>List View</h4>`;
    buttonDiv.appendChild(listUI);

    listUI.addEventListener("click", () => {
        location.hash = 'listView';
    });
};

// Create Map Button
function addMapView(buttonDiv, map) {
    const mapUI = document.createElement("div");
    mapUI.className = 'viewBtn viewBtnActive';
    mapUI.innerHTML = `<h4>Map View</h4>`;
    buttonDiv.appendChild(mapUI);

    mapUI.addEventListener("click", () => {
        location.hash = 'mapView';
    });
};

// Create Filter Button
function addFilter(buttonDiv, map) {

    const icon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 6 4" style="enable-background:new 0 0 6 4;" xml:space="preserve">
        <style type="text/css">
        </style>
        <path class="st0" d="M5.5,0.8c0-0.1-0.1-0.2-0.2-0.3S5.1,0.4,5,0.4H1.1c-0.1,0-0.2,0-0.3,0.1C0.6,0.6,0.5,0.7,0.5,0.8
            c0,0.1-0.1,0.2,0,0.4c0,0.1,0.1,0.2,0.2,0.3l2,1.9c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.2,0
            c0.1,0,0.1-0.1,0.2-0.1l1.9-1.9c0.1-0.1,0.1-0.2,0.2-0.3C5.6,1,5.6,0.9,5.5,0.8z"/>
        </svg>`;

    const filterUI = document.createElement("div");
    filterUI.className = 'viewBtn filter';
    filterUI.setAttribute('id', 'viewBtn');
    filterUI.innerHTML = `<h4>Filter</h4> ${icon}`;
    buttonDiv.appendChild(filterUI);

    filterUI.addEventListener("click", () => {
        console.log('click');
    });
};



// initiate map var
let map, i;

export function hello() {
    console.log('Hello form init Map');
}

// initiate map func
function initMap() {
    initGoogleMap();
    getAllListings().then((res) => {
        listings = res;
        console.log(listings);
        deployMarkers();
    });
}

window.initMap = initMap;

function initGoogleMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        disableDefaultUI: true,
        zoom: 14,
    });

    // create map UI buttons from above funcs
    const listDiv = document.createElement("div");

    addListView(listDiv, map);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(listDiv);

    const mapDiv = document.createElement("div");

    addMapView(mapDiv, map);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(mapDiv);

    const filterDiv = document.createElement("div");

    addFilter(filterDiv, map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(filterDiv);

    // load center of map based on user location
    window.addEventListener("load", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    map.setCenter(pos);

                    let mk1 = { lat: listings[0].lat, lng: listings[0].lng };
                    let mk2 = pos

                    let line =
                        new google.maps.Polyline({ path: [mk1, mk2], map: map });

                    let distance = haversine_distance(mk1, mk2);
                    console.log("Distance between markers: " + distance.toFixed(2) + " km.");

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
                },

                // () => {
                //     handleLocationError(true, map.getCenter());
                // }
            );

        } else {
            // Browser doesn't support Geolocation
            console.log('Location Error');
            // handleLocationError(false, map.getCenter());
        }


    });
}



function deployMarkers() {

    console.log('deployMarkers');
    for (i = 0; i < listings.length; i++) {
        function getIcon() {
            let icon;

            if (listings[i].category == "Home Goods") {
                icon = "https://res.cloudinary.com/scave2021/image/upload/v1635198526/scave/Component_16_dlxaya.png";
            } else if (listings[i].category == "Education") {
                icon = "https://res.cloudinary.com/scave2021/image/upload/v1636926752/scave/educationIcon_ppcrfg.png";
            } else if (listings[i].category == "Garden & Outdoor") {
                icon = "https://res.cloudinary.com/scave2021/image/upload/v1636925924/scave/Component_14outdoor_ahf2g3.png";
            } else if (listings[i].category == "Recreation") {
                icon = "https://res.cloudinary.com/scave2021/image/upload/v1636925924/scave/Component_15recreation_kb9dqe.png";
            } else if (listings[i].category == "Pet Supplies") {
                icon = "https://res.cloudinary.com/scave2021/image/upload/v1636926752/scave/petIcon_adqpey.png";
            }
            return icon;
        }

        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(listings[i].lat, listings[i].lng),
            icon: getIcon(),
            title: listings[i].title,
            map: map,
            data: listings[i]
        });

        marker.set('listing', listings[i]);

        google.maps.event.addListener(marker, 'click', (e) => {
            console.log('marker click', marker.data);
            showDetails(marker.data.id);
        });
    }
}

function showDetails(id) {
    const listing = listings.find(listing => listing.id === id);
    if (listing) {
        window.currentItem = listing;
        itemTitle.innerHTML = listing.title;
        itemCategory.innerHTML = listing.category;
        itemCondition.innerHTML = listing.condition;
        itemDistance.innerHTML = listing.distance + 'm';
        itemImage.src = listing.img[0];
    }
    showDetailsOverlay();
}

itemDisplayOverlay.addEventListener('click', () => {
    location.replace(`#detailsView`);
    populateListing();
});

function showDetailsOverlay() {
    $('.itemDisplayOverlay').show();
}

function closeDetailsOverlay() {
    $('.itemDisplayOverlay').hide();
}
window.closeDetailsOverlay = closeDetailsOverlay;

(() => {
    $('.itemDisplayOverlay').hide();
})()

window.getIcon = getIcon;