import "./onboarding.scss";

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  console.log("working");
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  console.log("working");
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.querySelector(".prev").addEventListener(plusSlides(-1));
document.querySelector(".next").addEventListener(currentSlide(1));
