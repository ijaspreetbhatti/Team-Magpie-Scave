import './login.scss'

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

    if (email === "magpie@mylangara.ca" && pass === "scave") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("Your email or password is wrong.")
    }
})
