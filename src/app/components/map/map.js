import * as $ from 'jquery';

window.listings = [];
window.markersOnMap = [];
window.filterObj = {
    category: [],
    condition: []
};

window.hideAllMarkers = () => {
    for (let i = 0; i < markersOnMap.length; i++) {
        markersOnMap[i].setMap(null);
    }
    markersOnMap = [];
}

// Create List Button
function addListView(buttonDiv, map) {
    const listUI = document.createElement("div");
    listUI.className = 'viewBtn listViewBtn';
    listUI.innerHTML = `<h4>List View</h4>`;
    buttonDiv.appendChild(listUI);

    listUI.addEventListener("click", () => {
        location.hash = 'listView';
        closeDetailsOverlay();
    });
};

function showList() {
    $('#listView').show();
}

window.showList = showList;

// Create Map Button
function addMapView(buttonDiv, map) {
    const mapUI = document.createElement("div");
    mapUI.className = 'viewBtn viewBtnActive mapViewBtn';
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
    filterUI.setAttribute('id', 'filterBtn');
    filterUI.innerHTML = `<h4>Filter</h4> ${icon}`;
    buttonDiv.appendChild(filterUI);

    filterUI.addEventListener("click", () => {
        const filterView = document.getElementById('filterOverlay');
        // const check = document.querySelectorAll('.filterCheckbox');


        if (filterView.style.display === 'none') {
            filterView.style.display = 'flex';
        // } else if(check.checked) {
        //     filterUI.classList.add("filterActive");
        } else {
            filterView.style.display = 'none';
            // filterUI.classList.remove("filterActive");
        }
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
}

window.initMap = initMap;

function initGoogleMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        disableDefaultUI: true,
        zoom: 14,
        styles: [
            {
                featureType: "poi",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "transit",
                stylers: [{ visibility: "off" }],
            },
        ],
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
                    new google.maps.Marker({
                        position: pos,
                        icon: "https://res.cloudinary.com/scave2021/image/upload/v1637267964/scave/centerIcon_u2vkhz.png",
                        map
                    });
                },
            );

        } else {
            // Browser doesn't support Geolocation
            console.log('Location Error');
            // handleLocationError(false, map.getCenter());
        }


    });
}

function deployMarkers(listingsForMarkers) {
    console.log('deploying Markers', listingsForMarkers)
    for (i = 0; i < listingsForMarkers.length; i++) {
        function getIcon() {
            let icon;

            if (listingsForMarkers[i].category == "homeGoods") {
                icon = "https://res.cloudinary.com/scave2021/image/upload/v1635198526/scave/Component_16_dlxaya.png";
            } else if (listingsForMarkers[i].category == "education") {
                icon = "https://res.cloudinary.com/scave2021/image/upload/v1636926752/scave/educationIcon_ppcrfg.png";
            } else if (listingsForMarkers[i].category == "gardenOutdoor") {
                icon = "https://res.cloudinary.com/scave2021/image/upload/v1636925924/scave/Component_14outdoor_ahf2g3.png";
            } else if (listingsForMarkers[i].category == "recreation") {
                icon = "https://res.cloudinary.com/scave2021/image/upload/v1636925924/scave/Component_15recreation_kb9dqe.png";
            } else if (listingsForMarkers[i].category == "pet") {
                icon = "https://res.cloudinary.com/scave2021/image/upload/v1636926752/scave/petIcon_adqpey.png";
            }
            return icon;
        }

        const marker = new google.maps.Marker({
            // position: getLocation(),
            position: new google.maps.LatLng(listingsForMarkers[i].lat, listingsForMarkers[i].lng),
            icon: getIcon(),
            title: listingsForMarkers[i].title,
            map: map,
            data: listingsForMarkers[i]
        });

        marker.set('listing', listingsForMarkers[i]);
        markersOnMap.push(marker);
        console.log('deployMarkers');

        google.maps.event.addListener(marker, 'click', (e) => {
            console.log('marker click', marker.data);
            showDetails(marker.data.id);
            location.hash = 'mapView';
        });
    }
}

window.deployMarkers = deployMarkers;

function getRenderableDistance(distance) {
    let dist = 0;
    if (Number(distance) > 1) {
        dist = Number(distance).toFixed(2) + " km";
    } else {
        dist = (Number(distance) * 1000).toFixed(2) + " m";
    }
    return dist;
}

window.getRenderableDistance = getRenderableDistance;

function showDetails(id) {
    const listing = listings.find(listing => listing.id === id);
    if (listing) {
        window.currentItem = listing;
        itemTitle.innerHTML = listing.title;
        itemCategory.innerHTML = categoryList[listing.category];
        itemCondition.innerHTML = conditionList[listing.condition];
        itemDistance.innerHTML = getRenderableDistance(listing.distance);
        itemImage.src = listing.img[0];
    }
    showDetailsOverlay();
}


itemImage.addEventListener('click', () => {
    location.replace(`#detailsView`);
    populateListing();
    closeDetailsOverlay();
});

function showDetailsOverlay() {
    $('.itemDisplayOverlay').show();
}

function closeDetailsOverlay() {
    $('.itemDisplayOverlay').hide();
}
window.closeDetailsOverlay = closeDetailsOverlay;

function init() {
    $('.itemDisplayOverlay').hide();
}

init();

function hideFilter() {
    $('#filterOverlay').hide();
}

document.getElementById('closeFilter').addEventListener('click', () => {
    hideFilter();
})

function checkFilter(id) {

    const theId = id.replace('Filter','');
    if(Object.keys(window.categoryList).includes(theId)) {
        if(filterObj.category.includes(theId)) {
            filterObj.category = filterObj.category.filter( cat => cat != theId);
        } else {
            filterObj.category.push(theId);
        }
    } else if(Object.keys(window.conditionList).includes(theId)) {
        if(filterObj.condition.includes(theId)) {
            filterObj.condition = filterObj.condition.filter( cat => cat != theId);
        } else {
            filterObj.condition.push(theId);
        }
    }

    populateListings();

    console.log(filterObj);
}

$('.filterCheckbox').bind('change', (e) => {
    console.log(e)
    checkFilter(e.currentTarget.id);
} )

document.getElementById('filterSubmitBtn').addEventListener('click', () => {
    const check = document.querySelectorAll("input[type='checkbox']");
    const filterView = document.querySelectorAll('.filter');

    if(check.checked = true) {
        console.log('checked');

        for(i=0; i < filterView.length; i++) {
            filterView[i].classList.add('filterActive');
        }
    } else if(check.checked = false) {
        console.log('not checked');

        for(i=0; i < filterView.length; i++) {
            filterView[i].classList.remove('filterActive');
        }
    };




    hideFilter();
})