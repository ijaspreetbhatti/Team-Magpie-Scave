import "./item_details.scss";

// uses the currentItem object declared in global namespace and load details in the UI
function populateListing() {
    const firstList = currentItem.img;
    document.getElementById("itemDetailTitle").innerHTML = currentItem.title;
    document.getElementById("itemDetailCategory").innerHTML = currentItem.category;
    document.getElementById("itemDetailCondition").innerHTML = currentItem.condition;
    document.getElementById("itemDetailPostDate").innerHTML = currentItem.date;
    mySlides.innerHTML = "";
    firstList.forEach((list) => {
        const smallImg = document.createElement('img');
        smallImg.setAttribute('class', 'opacity img');
        smallImg.setAttribute('src', list);
        mySlides.appendChild(smallImg);
        // mySlides.innerHTML = `<img src="${list}" class="opacity img" />`;
    });
    console.log(firstList)
    let firstImg = mySlides.firstChild;
    firstImg.classList.remove("opacity");
    document.getElementById("featuredImg").setAttribute('src', firstList[0]);
    document
        .getElementById("mySlides")
        .addEventListener("click", mySlidesHandler);

    smallMap();
}

// this adds the populateListing function into global namespace.
window.populateListing = populateListing;

// let containerHeader = document.querySelector(".content-info");
// let imgs = document.querySelector(".imgs");

// let thumbnail = document.querySelector(".thumbnail");

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

spanConfirm.onclick = function () {
    btn.style.backgroundColor = '#455A64';
    btn.style.color = '#ffffff'
    modal.style.display = 'none';
}

spanCancel.onclick = function () {
    btn.style.backgroundColor = '#ffffff';
    btn.style.color = "#263238"
    modal.style.display = 'none';
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

function smallMap() {
    const map = new google.maps.Map(document.getElementById('smallMap'), {
        disableDefaultUI: true,
        zoom: 14,
        center: { lat: currentItem.lat, lng: currentItem.lng },
        styles: [
            {
                featureType: "poi",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "transit",
                stylers: [{ visibility: "off" }],
            },
        ],
    });
}

window.smallMap = smallMap;
