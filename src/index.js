import './app/components/header/search';
import './app/add_item/add_item';
import './main.scss';
import * as $ from "jquery"

let currentUser;
const views = [
    "addItemView",
    "mapView",
    "listView",
]

// init method
function init() {
    console.log('initializing');
    checkLoginState();
    location.hash = "mapView";
    switchView(location.hash);
}

init();

window.addEventListener('hashchange', () => {
    console.log(`Switching view to ${location.hash}`);
    switchView(location.hash);
});

logOut.addEventListener('click', () => {
    signOut();
});

function checkLoginState() {
    currentUser = localStorage.getItem('user');
    if (currentUser) {
        console.log(currentUser);
    } else {
        location.replace('/login.html');
    }
}

function signOut() {
    localStorage.removeItem('user');
    location.replace('/');
}

function switchView(id) {
    hideAllViews();
    showView(id);
}

function hideAllViews() {
    views.forEach(id => {
        console.log(`#${id}`);
        $(`#${id}`).hide();
    });
}

function showView(id) {
    $(`${id}`).fadeIn();
}
