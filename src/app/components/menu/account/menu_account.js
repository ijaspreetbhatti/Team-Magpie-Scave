import { app } from "../../../services/firebase-service";
import { getAuth } from "firebase/auth";

/* Get Logged In User's Information **************************/
function checkLoginState() {
    let auth = getAuth(app);
    console.log(auth.currentUser);
    let user = localStorage.getItem("user");
    console.log(user);
    if (user) {
    //   let fullname = currentUser.displayName;
    // let surname = fullname.split(" ").getOrNull(1);
    // console.log(surname);
        currentUser = JSON.parse(user);
        acc_fName.value = currentUser.displayName
            ? currentUser.displayName
            : "John";
        acc_lName.value = currentUser.displayName
            ? currentUser.displayName
            : "Doe";
        acc_email.value = currentUser.email;
        console.log(currentUser);
    } else {
        location.replace("/login.html");
    }
    
}

checkLoginState();

/* Leave Confirmation *****************************/
function popupModal() {
    let popup = document.getElementById("js-popup");
    if (!popup) return;

    let blackBg = document.getElementById("js-black-bg");
    let stayBtn = document.getElementById("js-stay-btn");
    let showBtn = document.getElementById("mainLogo");

    closePopUp(blackBg);
    closePopUp(stayBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
        if (!elem) return;
        elem.addEventListener("click", function () {
            console.log("gomi");
            popup.classList.toggle("is-show");
        });
    }
}
popupModal();
