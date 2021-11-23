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
            <span class="distance">${getRenderableDistance(listing.distance)}</span>
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