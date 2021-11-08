import { uploadImage } from '../services/cloudinary-service';
import { saveListing } from '../services/firebase-service';

// Select Images from File and Display on UI;
const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
        reader.onloadend = () => {
            resolve(reader.result);
        };
    });
};

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

// Func for initial first photo selection

function hideHelpText(upload, background, hide, hide2, show) {
    document.querySelectorAll(".photoInsert").forEach(a => a.style.display = "flex");

    upload.style.display = "block"
    background.style.background = "white";
    hide.style.display = "none";
    hide2.style.display = "none";
    show.style.display = "block";
}

function removeImg(img, show, hide, hide2, background) {
    img.src = "";

    show.style.display = "flex";
    background.style.background = "#CFD8DC";
    hide.style.display = "none";
    hide2.style.display = "none";
};

function submitAddItemForm() {
    const formValue = {
        title: document.getElementById('item').value,
        category: document.getElementById('category').value,
        condition: document.getElementById('condition').value,
        location: document.getElementById('location').value,
        description: document.getElementById('description').value,
        date: (new Date()).toISOString(),
        img: []
    }

    const images = [input1.files[0], input2.files[0], input3.files[0], input4.files[0], input5.files[0]];

    console.log(images.filter(img => img));
    const imagesToUpload = images.filter(img => img)

    const chkUpload = setInterval(() => {
        console.log(formValue.img.length)
        if (imagesToUpload.length === formValue.img.length) {
            console.log(formValue);
            saveListing(formValue).then((response) => {
                alert('Item Created!');
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

window.photoUpload = photoUpload;
window.hideHelpText = hideHelpText;
window.removeImg = removeImg;
window.submitAddItemForm = submitAddItemForm;