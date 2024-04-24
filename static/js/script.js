const slides = document.querySelectorAll('.slide');
let currentImageIndex = 0;
let slideInterval;


function moveSlides(forward = true) {
  clearInterval(slideInterval);

  if (forward) {
    currentImageIndex = (currentImageIndex + 1) % slides.length;
  } else {
    currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
  }

  slides.forEach((slide, index) => {
    const img = slide.querySelector('img');
    img.src = `/static/img/slide${(currentImageIndex - index + slides.length) % slides.length + 1}.png`;
    img.alt = `Slide ${(currentImageIndex - index + slides.length) % slides.length + 1}`;
  });

  slideInterval = setInterval(moveSlides, 3000); 
}

moveSlides();

function moveRight() {
  moveSlides(true);
}

function moveLeft() {
  moveSlides(false);
}

slides[0].addEventListener('click', moveLeft);
slides[slides.length - 1].addEventListener('click', moveRight);

$(window).resize(function(){
  if ($(window).width()/$(window).height() < 1.77) {
     $('#container').css('width','100vw');
     $('#container').css('height','56.4vw');
     $('#container').css('margin-left','-50vw');
     $('#container').css('margin-top','-28.2vw');    
  }
  else {
     $('#container').css('width','177vh');
     $('#container').css('height','100vh');
     $('#container').css('margin-left','-88.5vh');
     $('#container').css('margin-top','-50vh');       
  }   
});