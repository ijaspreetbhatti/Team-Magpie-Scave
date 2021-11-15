import './menu_account.scss';
import { app } from "../../../services/firebase-service";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const user = auth.currentUser;
console.log(user);
// if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  // const displayName = user.displayName;
  // const email = user.email;
  // const photoURL = user.photoURL;
  // const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  // const uid = user.uid;
// }

// import { getAuth, updateProfile } from "firebase/auth";

// const auth = getAuth();
// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });


// let user = firebase.auth().currentUser;
// user.updateProfile({
//     //編集したいもの
//     displayName: "ユーザ名",
//     photoURL: "アイコン画像のURL"
// }).then((user) => {
//     //アカウントを編集しました
// }).catch((error) => {
//     //アカウントを編集を失敗しました
// });



/* Leave Confirmation *****************************/
function popupImage() {
  let popup = document.getElementById('js-popup');
  if(!popup) return;

  let blackBg = document.getElementById('js-black-bg');
  let stayBtn = document.getElementById('js-stay-btn');
  let showBtn = document.getElementById('js-show-popup');

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
popupImage();