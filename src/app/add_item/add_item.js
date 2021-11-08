// Select Images from File and Display on UI

function photoUpload(event, upload, background, hide, show) {
    console.log('img');
    const img = event.target.files[0];
    const reader = new FileReader();

    let newImg = upload;
    newImg.title = img.name;

    reader.onload = function(event) {
        newImg.src = event.target.result;
    };

    reader.readAsDataURL(img);

    upload.style.display = "block"
    background.style.background = "white";
    hide.style.display = "none";
    show.style.display = "block";
}

window.photoUpload = photoUpload;

// Func for initial first photo selection

function firstUpload(event, upload, background, hide, hide2, show) {
    console.log('img');
    const img = event.target.files[0];
    const reader = new FileReader();

    let newImg = upload;
    newImg.title = img.name;

    reader.onload = function(event) {
        newImg.src = event.target.result;
    };

    reader.readAsDataURL(img);

    document.querySelectorAll(".photoInsert").forEach(a=>a.style.display = "flex");

    upload.style.display = "block"
    background.style.background = "white";
    hide.style.display = "none";
    hide2.style.display = "none";
    show.style.display = "block";
}

window.firstUpload = firstUpload;

function removeImg(img, show, hide, hide2, background) {
    img.src = "";
    
    show.style.display = "flex";
    background.style.background = "#CFD8DC";
    hide.style.display = "none";
    hide2.style.display = "none";
};

window.removeImg = removeImg;

