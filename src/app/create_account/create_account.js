import './create_account.scss';
import { database } from "../services/firebase-service";

console.log('read');

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
    let userInfo = new UserInfo(firstName.value, lastName.value, SU_email.value, phone.value, SU_pass.value);
    userArr.push(userInfo);
    console.log(userArr);

})