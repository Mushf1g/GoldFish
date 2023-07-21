"use strict"


$('.header__slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    // responsive: [
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       infinite: true,
    //       speed: 300,
    //       slidesToShow: 1,
    //       centerMode: true,
    //       variableWidth: true,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });





  $('.card-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    // arrows: false,
    // autoplaySpeed: 2000,
    prevArrow: ".prev",
    nextArrow: ".next"
  });



  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}