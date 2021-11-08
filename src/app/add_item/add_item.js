// Select Images from File and Display on UI

function photoUpload(event, upload, background, hide) {
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
}

window.photoUpload = photoUpload;

// Func for initial first photo selection

function firstUpload(event, upload, background, hide, hide2) {
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
}

window.firstUpload = firstUpload;