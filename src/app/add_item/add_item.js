console.log('hi!!');

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const img5 = document.querySelector('#img5');


function photoUpload(event) {
    console.log('img');
    const img = event.target.files[0];
    const reader = new FileReader();

    let thisImg = document.getElementById('insert1');
    thisImg.title = img.name;

    reader.onload = function(event) {
        thisImg.src = event.target.result;
    };

    reader.readAsDataURL(img);
}

window.photoUpload = photoUpload;