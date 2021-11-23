import "./app/components/header/search";
import "./app/add_item/add_item";
import "./main.scss";
import * as $ from "jquery";
import { app } from "./app/services/firebase-service"
import { getAuth } from "firebase/auth"

let currentUser;
window.currentUser = currentUser;
const views = [
    "addItemView",
    "listView",
    "menuListingView",
    "createAccountView",
    "menuAccountView",
    "notificationView",
    "detailsView",
    "searchView",
];

// init method
function init() {
    console.log("initializing");
    checkLoginState();
    location.hash = "mapView";
    switchView(location.hash);
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
        headerUserId.innerHTML = currentUser.displayName ? currentUser.displayName : 'Hello!';
        headerMailId.innerHTML = currentUser.email;
        console.log(currentUser);
    } else {
        location.replace("/login.html");
    }
}

function signOut() {
    localStorage.removeItem("user");
    location.replace("/");
}

function switchView(id) {
    if(id === "#mapView") {
        $(".page-container").hide();
    } else {
        $(".page-container").show();
    }
    hideAllViews();
    showView(id);
}

function hideAllViews() {
    views.forEach((id) => {
        console.log(`#${id}`);
        $(`#${id}`).hide();
    });
}

function showView(id) {
    $(`${id}`).fadeIn();
}
