import './create_account.scss';
import { db } from "../services/firebase-service";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(db);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  
const signupForm = document.querySelector('#signup-form');

let userArr = [];

class UserInfo {
    constructor(first, last, email, phone, pass) {
        this.first = first;
        this.last = last;
        this.email = email;
        this.phone = phone;
        this.pass = pass;
    }
}

document.getElementById('signup-btn').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("gomi");

    // get user info
    const email = SU_email.value;
    const password = SU_pass.value;

    // sign up users
    auth.createUserWithEmailAndPassword(email, password).then( cred => {
        console.log(cred);
    })

    let userInfo = new UserInfo(firstName.value, lastName.value, SU_email.value, phone.value, SU_pass.value);
    userArr.push(userInfo);
    // console.log(userArr);

})