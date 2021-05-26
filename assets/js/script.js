window.addEventListener("load",function() {
  showSlides(slideIndex);
});


const prevSlider = document.querySelector(".prev.slider-btn");
const nextSlider = document.querySelector(".next.slider-btn");

prevSlider.addEventListener("click", function () {
  plusSlides(-1);
});

nextSlider.addEventListener("click", function () {
  plusSlides(1);
});

function plusSlides(n){
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}