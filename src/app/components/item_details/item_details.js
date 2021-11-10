import "./item_details.scss";
import { getAllListings } from "../../services/firebase-service";
import * as $ from "jquery";

let listings = [];

getAllListings().then((res) => {
    listings = res;
    populateListings();
});

function populateListings() {
    const firstList = listings[0].img;
    const mySlides = document.createElement("div");
    mySlides.id = "mySlides";
    mySlides.className = "mySlides";
    firstList.forEach((list, index) => {
        const img = document.createElement("img");
        img.setAttribute("src", list);
        img.setAttribute("class", "opacity img");
        mySlides.appendChild(img);
    });
    imgs.appendChild(mySlides);
    let firstImg = mySlides.firstChild;
    firstImg.classList.remove("opacity");
    console.log(firstImg);
    document
        .getElementById("mySlides")
        .addEventListener("click", mySlidesHandler);
}

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
