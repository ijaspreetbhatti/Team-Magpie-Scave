import "./create_account.scss";
import { app } from "../services/firebase-service";

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

const auth = getAuth(app);

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("gomi", SU_pass.value.length);
    if (SU_pass.value.length > 8) {
        wrongPass.innerHTML = "";
        const email = SU_email.value;
        const password = SU_pass.value;
        createAccount(email, password);
    } else {
        wrongPass.innerHTML = "Password needs to be 8 characters or more";
    }
});

function createAccount(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
            console.log(userCredential);
            const user = userCredential.user;
            updateAccount({
                displayName: firstName.value + " " + lastName.value,
            });
        }
    );
}

function updateAccount(user) {
    updateProfile(auth.currentUser, {
        displayName: user.displayName,
    }).then(() => {
        console.log("Profile updated!");
        localStorage.setItem("user", JSON.stringify(userCredential));
        location.replace("/");
    });
}
