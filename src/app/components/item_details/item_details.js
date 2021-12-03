import * as moment from "moment";
import { setListingAsCollected } from "../../services/firebase-service";

// uses the currentItem object declared in global namespace and load details in the UI
function populateListing() {
    const firstList = currentItem.img;
    document.getElementById("itemDetailTitle").innerHTML = currentItem.title;
    document.getElementById("itemDetailCategory").innerHTML = categoryList[currentItem.category];
    document.getElementById("itemDetailCondition").innerHTML = conditionList[currentItem.condition];
        document.getElementById('itemDetailDescription').innerHTML = currentItem.description;
    document.getElementById("itemDetailPostDate").innerHTML = moment(new Date(currentItem.date)).fromNow();

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
    markAsCollected();
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

function markAsCollected() {
    setListingAsCollected(currentItem.id).then((e)=>{
        showNotification('Item Collected!');
        loadListings();
        location.hash = "mapView";
    }).catch(error => { showNotification('Error: ' + error.message) })
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

    function icon() {
        let icon;

        if (currentItem.category == "homeGoods") {
            icon = "https://res.cloudinary.com/scave2021/image/upload/v1635198526/scave/Component_16_dlxaya.png";
        } else if (currentItem.category == "education") {
            icon = "https://res.cloudinary.com/scave2021/image/upload/v1636926752/scave/educationIcon_ppcrfg.png";
        } else if (currentItem.category == "gardenOutdoor") {
            icon = "https://res.cloudinary.com/scave2021/image/upload/v1636925924/scave/Component_14outdoor_ahf2g3.png";
        } else if (currentItem.category == "recreation") {
            icon = "https://res.cloudinary.com/scave2021/image/upload/v1636925924/scave/Component_15recreation_kb9dqe.png";
        } else if (currentItem.category == "pet") {
            icon = "https://res.cloudinary.com/scave2021/image/upload/v1636926752/scave/petIcon_adqpey.png";
        }
        return icon;
    }

    new google.maps.Marker({
        position: { lat: currentItem.lat, lng: currentItem.lng },
        icon: icon(),
        map,
    })
}



window.smallMap = smallMap;
