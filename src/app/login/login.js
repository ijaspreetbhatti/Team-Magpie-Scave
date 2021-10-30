import './login.scss'
import { app } from "../services/firebase-service";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
function loginAccount(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            const user = userCredential.user;
        })
        .catch((error) => {
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

// document.getElementById('clickbtn').addEventListener('click', clickLogin);

// function clickLogin () {
//     console.log('clickLogin');
// }

console.log("loaded");

const loginForm = document.getElementById("login_form");
const button = document.getElementById("btn");


button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("clicked");
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    loginAccount(email, pass);
})
