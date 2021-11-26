// ****************************************************************************************************** //
// ******************************************* Import Services ****************************************** //
// ****************************************************************************************************** //

import { uploadImage } from '../services/cloudinary-service';
import { saveListing } from '../services/firebase-service';


// ******************************** Variable Declarations ******************************** //
let locationAsArrayOfCoords = [0,0];


// ****************************************************************************************************** //
// ******************************** Funcs to Upload/Remove Images on UI ********************************* //
// ****************************************************************************************************** //

// ************************************** Main Img Upload Func ****************************************** //
function photoUpload(event, upload, background, hide, show) {
    console.log('img');
    const img = event.target.files[0];
    console.log(img);
    const reader = new FileReader();

    let newImg = upload;
    newImg.title = img.name;

    reader.onload = function (event) {
        newImg.src = event.target.result;
    };

    reader.readAsDataURL(img);

    upload.style.display = "block"
    background.style.background = "white";
    hide.style.display = "none";
    show.style.display = "block";
}

// ************************************** Intial Upload Func ******************************************** //

function hideHelpText(upload, background, hide, hide2, show) {
    document.querySelectorAll(".photoInsert").forEach(a => a.style.display = "flex");

    upload.style.display = "block"
    background.style.background = "white";
    hide.style.display = "none";
    hide2.style.display = "none";
    show.style.display = "block";
}

// ************************************** Remove Image Func ********************************************* //
function removeImg(img, show, hide, hide2, background) {
    img.src = "";

    show.style.display = "flex";
    background.style.background = "#CFD8DC";
    hide.style.display = "none";
    hide2.style.display = "none";
};

// ****************************************************************************************************** //
// ************************************** Get Geolocation Event Listeners ******************************* //
// ****************************************************************************************************** //

function getLocation(address) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {

  if (status == google.maps.GeocoderStatus.OK) {
      const latitude = results[0].geometry.location.lat();
      const longitude = results[0].geometry.location.lng();
      const location = [
          latitude, longitude
      ];

      locationAsArrayOfCoords = location;
      console.log(locationAsArrayOfCoords);
      return location;
      }
  });
}


// ****************************************************************************************************** //
// *********************************** Add Images to Cloudinary & Firebase ****************************** //
// ****************************************************************************************************** //

const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
        reader.onloadend = () => {
            resolve(reader.result);
        };
    });
};


function submitAddItemForm() {
    const formValue = {
        title: document.getElementById('item').value,
        category: document.getElementById('category').value,
        condition: document.getElementById('condition').value,
        lat: locationAsArrayOfCoords[0],
        lng: locationAsArrayOfCoords[1],
        description: document.getElementById('description').value,
        date: (new Date()).toISOString(),
        img: [],
        author: currentUser.email
    }

    const images = [input1.files[0], input2.files[0], input3.files[0], input4.files[0], input5.files[0]];

    console.log(images.filter(img => img));
    const imagesToUpload = images.filter(img => img)

    const chkUpload = setInterval(() => {
        console.log(formValue.img.length)
        if (imagesToUpload.length === formValue.img.length) {
            console.log(formValue);
            saveListing(formValue).then((response) => {
                loadListings();
                showNotification("Item Created!");
                location.hash = "mapView";
            }).catch((error) => {
                console.log(error);
            })
            clearInterval(chkUpload);
        }
    }, 250);

    imagesToUpload.forEach((img) => {
        blobToBase64(img).then((res) => {
            console.log(res);
            uploadImage({
                file: res,
                timestamp: (new Date()).getTime()
            }).then((response) => {
                console.log(response);
                formValue.img.push(response.url);
            }).catch((error) => {
                console.error(error);
            });
        })
    });
}

// ****************************************************************************************************** //
// **************************************** Add Img Event Listeners ************************************* //
// ****************************************************************************************************** //


document.getElementById('mainInput').addEventListener('change', () => {
    const insert = document.getElementById('insert1');
    const photoBackground = document.getElementById('p1');
    const label = document.getElementById('img1');
    const close = document.getElementById('c1');
    const text = document.getElementById('photoContainerText');

    document.getElementById("input1").disabled = true;

    hideHelpText(insert, photoBackground, text, label, close);
})

document.getElementById('input1').addEventListener('change', () => {

    const insert = document.getElementById('insert1');
    const photoBackground = document.getElementById('p1');
    const label = document.getElementById('img1');
    const close = document.getElementById('c1');

    photoUpload(event, insert, photoBackground, label, close);
})


document.getElementById('input2').addEventListener('change', () => {

    const insert = document.getElementById('insert2');
    const photoBackground = document.getElementById('p2');
    const label = document.getElementById('img2');
    const close = document.getElementById('c2');

    photoUpload(event, insert, photoBackground, label, close);
})


document.getElementById('input3').addEventListener('change', () => {

    const insert = document.getElementById('insert3');
    const photoBackground = document.getElementById('p3');
    const label = document.getElementById('img3');
    const close = document.getElementById('c3');

    photoUpload(event, insert, photoBackground, label, close);
})

document.getElementById('input4').addEventListener('change', () => {

    const insert = document.getElementById('insert4');
    const photoBackground = document.getElementById('p4');
    const label = document.getElementById('img4');
    const close = document.getElementById('c4');

    photoUpload(event, insert, photoBackground, label, close);
})


document.getElementById('input5').addEventListener('change', () => {

    const insert = document.getElementById('insert5');
    const photoBackground = document.getElementById('p5');
    const label = document.getElementById('img5');
    const close = document.getElementById('c5');

    photoUpload(event, insert, photoBackground, label, close);
})

// ****************************************************************************************************** //
// ************************************** Remove Img Event Listeners ************************************ //
// ****************************************************************************************************** //


document.getElementById('c1').addEventListener('click', () => {

    const img1 = document.getElementById('img1');
    const insert1 = document.getElementById('insert1');
    const c1 = document.getElementById('c1');
    const p1 = document.getElementById('p1');

    document.getElementById("input1").disabled = false;

    removeImg(insert1, img1, c1, insert1, p1);
})

document.getElementById('c2').addEventListener('click', () => {

    const img2 = document.getElementById('img2');
    const insert2 = document.getElementById('insert2');
    const c2 = document.getElementById('c2');
    const p2 = document.getElementById('p2');

    removeImg(insert2, img2, c2, insert2, p2);
})

document.getElementById('c3').addEventListener('click', () => {

    const img3 = document.getElementById('img3');
    const insert3 = document.getElementById('insert3');
    const c3 = document.getElementById('c3');
    const p3 = document.getElementById('p3');

    removeImg(insert3, img3, c3, insert3, p3);
})

document.getElementById('c4').addEventListener('click', () => {

    const img4 = document.getElementById('img4');
    const insert4 = document.getElementById('insert4');
    const c4 = document.getElementById('c4');
    const p4 = document.getElementById('p4');

    removeImg(insert4, img4, c4, insert4, p4);
})

document.getElementById('c5').addEventListener('click', () => {

    const img5 = document.getElementById('img5');
    const insert5 = document.getElementById('insert5');
    const c5 = document.getElementById('c5');
    const p5 = document.getElementById('p5');

    removeImg(insert5, img5, c5, insert5, p5);
})


// ************************************** Location Autocomplete ***************************************** //

let autocomplete;
let address;

function initAutocomplete() {
  address = document.querySelector("#location");

  autocomplete = new google.maps.places.Autocomplete(address, {
    componentRestrictions: { country: ["us", "ca"] },
    fields: ["address_components"],
    types: ["address"],
  });
  address.focus();
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
  const place = autocomplete.getPlace();
  let address1 = "";
  let postcode = "";

  for (const component of place.address_components) {
    const componentType = component.types[0];

    switch (componentType) {
    case "street_number": {
        address1 = `${component.long_name}${address1} `;
        break;
      }

    case "route": {
        address1 += `${component.short_name}, `;
        break;
      }

    case "postal_code": {
        address1 += ` ${component.long_name}${postcode}`;
        break;
      }

    case "country":
        address1 += component.long_name + ",";
        break;
    }
  }
    address.value = address1;
    getLocation(address1);
}

// ************************************** Show/Close Modal ********************************************** //
document.getElementById('discard-item-btn').addEventListener('click', () => {
    const modal = document.getElementById('addItemPopUp');
    const background = document.getElementById('addItemOverlay');
    const width = window.matchMedia("(max-width: 999px)");

    // if(width.matches) {
    //     background.style.display = "block";
    // };
    background.style.display = "block";
    modal.style.display = "flex";
});

document.getElementById('keepEditingAddItem').addEventListener('click', () => {
    const modal = document.getElementById('addItemPopUp');
    const background = document.getElementById('addItemOverlay');

    modal.style.display = "none";
    background.style.display = "none";
});

document.getElementById('leaveAddItem').addEventListener('click', () => {
    const modal = document.getElementById('addItemPopUp');
    const background = document.getElementById('addItemOverlay');

    modal.style.display = "none";
    background.style.display = "none";

    location.hash = "mapView";
});

// ************************************** Intialize Funcs in Window ************************************* //

window.initAutocomplete = initAutocomplete;
window.fillInAddress = fillInAddress;
window.getLocation = getLocation;
window.photoUpload = photoUpload;
window.hideHelpText = hideHelpText;
window.removeImg = removeImg;
window.submitAddItemForm = submitAddItemForm;


