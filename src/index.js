import './app/components/header/search';
import './main.scss';

let currentUser;

function checkLoginState() {
    currentUser = localStorage.getItem('user');
    if(currentUser) {
        console.log(currentUser);
    } else {
        location.replace('/login.html');
    }
}

checkLoginState();