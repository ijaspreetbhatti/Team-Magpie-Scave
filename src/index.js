import "./app/components/header/search";
import "./app/add_item/add_item";
import "./main.scss";
import * as $ from "jquery";
import { app } from "./app/services/firebase-service";
import { getAuth } from "firebase/auth";
import { getAllListings } from "./app/services/firebase-service";

window.currentUser = {};

const views = [
  "addItemView",
  // "mapView",
  "listView",
  "menuListingView",
  "createAccountView",
  "menuAccountView",
  "notificationView",
  "detailsView",
  "searchView",
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
    console.log(res);
    listings = res;
    populateListings();
  });
}

// init method
function init() {
  console.log("initializing");
  checkLoginState();
  location.hash = "mapView";
  switchView(location.hash);
  loadListings();
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

window.showNotification = function(message) {
  let notificationRef = document.getElementById('notification');
  notificationRef.classList.remove('notification-inactive');
  notificationRef.classList.add('notification-active');
  notificationRef.innerHTML = message;
  setTimeout(() => {
    notificationRef.classList.remove('notification-active');
    notificationRef.classList.add('notification-inactive');
  }, 2500);
}

showNotification('Welcome to Magpie`s Scave!');