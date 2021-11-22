import "./menu_account.scss";
import { app } from "../../../services/firebase-service";
// import { getAuth } from "firebase/auth";

// const auth = getAuth(app);
// const user = auth.currentUser;
// console.log(user);



import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const emailVerified = user.emailVerified;

  console.log(displayName);
  console.log("otter");

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}





/* Leave Confirmation *****************************/
function popupModal() {
  let popup = document.getElementById('js-popup');
  if(!popup) return;

  let blackBg = document.getElementById('js-black-bg');
  let stayBtn = document.getElementById('js-stay-btn');
  let showBtn = document.getElementById('mainLogo');

  closePopUp(blackBg);
  closePopUp(stayBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      console.log("gomi");
      popup.classList.toggle('is-show');
    });
  }
}
popupModal();