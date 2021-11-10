import './login.scss'
import { app } from "../services/firebase-service";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
function loginAccount(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('user', JSON.stringify(user));
            location.replace('/');
        })
        .catch((error) => {
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

const loginForm = document.getElementById("login_form");
const button = document.getElementById("btn");


button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("clicked");
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    loginAccount(email, pass);
})

let currentUser;

function checkLoginState() {
    currentUser = localStorage.getItem('user');
    if(currentUser) {
        location.replace('/');
    }
}

checkLoginState();
