import "./app/components/header/search";
import "./app/add_item/add_item";
import * as $ from "jquery";
import { app } from "./app/services/firebase-service";
import { getAuth } from "firebase/auth";
import { getAllListings } from "./app/services/firebase-service";

window.currentUser = {};

const views = [
  "addItemView",
  // "mapView",
  "listView",
  "createAccountView",
  "menuAccountView",
  "notificationView",
  "detailsView",
  "searchView",
  "menu_listingView",
];

window.categoryList = {
  homeGoods: 'Home Goods',
  gardenOutdoor: 'Garden & Outdoor',
  recreation: 'Recreation',
  pet: 'Pet',
  education: 'Education',
};

window.conditionList = {
  likeNew: 'Like New',
  good: 'Good',
  fair: 'Fair',
  damaged: 'Damaged',
};

window.loadListings = () => {
  getAllListings().then((res) => {
    listings = res;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        for (let i = 0; i < listings.length; i++) {
          let mk1 = { lat: listings[i].lat, lng: listings[i].lng };
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          let mk2 = pos;
          let distance = haversine_distance(mk1, mk2);
          listings[i].distance = distance;
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
        }
        console.log(`Listing ${listings}`)
        populateListings();
      });
  });
}

window.showNotification = function (message) {
  let notificationRef = document.getElementById('notification');
  notificationRef.classList.remove('notification-inactive');
  notificationRef.classList.add('notification-active');
  notificationRef.innerHTML = message;
  setTimeout(() => {
    notificationRef.classList.remove('notification-active');
    notificationRef.classList.add('notification-inactive');
  }, 2500);
}

// init method
function init() {
  if (window.navigator.onLine) {

    showNotification('Welcome to Magpie`s Scave!');
    console.log("initializing");
    checkLoginState();
    location.hash = "mapView";
    switchView(location.hash);
    loadListings();
  } else {
    document.getElementsByTagName('body')[0].innerHTML = `
    <div class="offline">
      <img src="icons/icon-128.png"/>
      <h1>You are Offline! <br> Scave needs internet connectivity to be operational!</h1>
      <button onclick="location.reload()">Reconnect</button>
    </div>
    `;
  }
}

init();

window.addEventListener("hashchange", () => {
  console.log(`Switching view to ${location.hash}`);
  switchView(location.hash);
});

logOut.addEventListener("click", () => {
  signOut();
});

function checkLoginState() {
  let auth = getAuth(app);
  console.log(auth.currentUser);
  let user = localStorage.getItem("user");
  console.log(user);
  if (user) {
    currentUser = JSON.parse(user);
    headerUserId.innerHTML = currentUser.displayName
      ? currentUser.displayName
      : "Hello!";
    headerMailId.innerHTML = currentUser.email;
    console.log(currentUser);
  } else {
    location.replace("/home.html");
  }
}

function signOut() {
  localStorage.removeItem("user");
  location.replace("/");
}

function switchView(id) {
  if (id === "#mapView") {
    $(".page-container").hide();
  } else {
    $(".page-container").show();
  }
  hideAllViews();
  showView(id);
}

function hideAllViews() {
  views.forEach((id) => {
    $(`#${id}`).hide();
  });
}

function showView(id) {
  $(`${id}`).fadeIn();
}