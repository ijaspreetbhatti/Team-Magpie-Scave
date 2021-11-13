import "./item_details.scss";

function populateListing() {
    const firstList = currentItem.img;
    firstList.forEach((list) => {
        mySlides.innerHTML = `<img src="${list}" class="opacity img" />`;
    });
    let firstImg = mySlides.firstChild;
    firstImg.classList.remove("opacity");
    console.log(firstImg);
    document.getElementById("featuredImg").setAttribute('src', firstList[0]);
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

//modal
let modal = document.getElementById('myModal');
let btn = document.getElementById('collectBtn');
let spanConfirm = document.getElementsByClassName('confirm')[0];
let spanCancel = document.getElementsByClassName('cancel')[0];

btn.onclick = function () {
    modal.style.display = 'block';
}

spanCancel.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}