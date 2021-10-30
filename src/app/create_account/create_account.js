import './create_account.scss';
import { app } from "../services/firebase-service";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const auth = getAuth(app);
function createAccount(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      updateAccount({
        displayName: 'Gabriel'
      });
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function updateAccount(user) {
  updateProfile(auth.currentUser, {
    displayName: user.displayName
  }).then(() => {
    console.log('Profile updated!');
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
}

(()=>{
  createAccount('gabwt.84@gmail.com', 'password');
})();

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
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
  })

  let userInfo = new UserInfo(firstName.value, lastName.value, SU_email.value, phone.value, SU_pass.value);
  userArr.push(userInfo);
  // console.log(userArr);

})