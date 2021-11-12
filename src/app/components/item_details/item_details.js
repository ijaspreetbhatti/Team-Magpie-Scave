import "./item_details.scss";
<<<<<<< HEAD
import { getAllListings } from "../../services/firebase-service";
=======
>>>>>>> develop

function populateListing() {
    const firstList = currentItem.img;
    firstList.forEach((list) => {
        mySlides.innerHTML = `<img src="${list}" class="opacity img" />`;
    });
<<<<<<< HEAD
    imgs.appendChild(mySlides);
    // let firstImg = mySlides.firstChild;
    // firstImg.classList.remove("opacity");

=======
    let firstImg = mySlides.firstChild;
    firstImg.classList.remove("opacity");
    console.log(firstImg);
    document.getElementById("featuredImg").setAttribute('src', firstList[0]);
>>>>>>> develop
    document
        .getElementById("mySlides")
        .addEventListener("click", mySlidesHandler);
}

window.populateListing = populateListing;

let containerHeader = document.querySelector(".content-info");
let imgs = document.querySelector(".imgs");
let thumbnail = document.querySelector(".thumbnail");

function mySlidesHandler(e) {
    if (e.target.src) {
        setFeaturedImg(e);
        addOpacity(e);
        deleteOpacity(e);
    }
}

function setFeaturedImg(e) {
    document.getElementById("featuredImg").setAttribute("src", e.target.src);
}

function deleteOpacity(e) {
    console.log(e);
    e.target.classList.remove("opacity");
}

function addOpacity(e) {
    const imgElements = document.querySelectorAll(".img");
    imgElements.forEach((element) => {
        element.classList.add("opacity");
    });
}

// goods.forEach(function(good) {
//     containerHeader.innerHTML = `
//     <h1>${good.title}</h1>
//     <div class="content-header">
//         <div class="sub-info">
//             <span class="category">${good.category}</span>
//             <span>.</span>
//             <span class="condition">${good.condition}</span>
//         </div>
//         <span class="hours">${good.hour}</span>
//     </div>
//     `
// })

//  function detailMap {
//         map = new google.maps.Map(document.getElementById("smallMap"), {
//         disableDefaultUI: true,
//         zoom: 14,
//     });
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const pos = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude,
//                     };
//                     map.setCenter(pos);
//                 },
//             );

//         } else {
//             // Browser doesn't support Geolocation
//             console.log('Location Error');
//             // handleLocationError(false, map.getCenter());
//         }
//  }