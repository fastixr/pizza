const slides = document.querySelectorAll('.slide');
let currentImageIndex = 0;
let slideInterval;

$(function(){
	$nav = $('.header');
	$nav.css('width', $nav.outerWidth());
	$window = $(window);
	$h = $nav.offset().top;
	$window.scroll(function(){
		if ($window.scrollTop() > $h){
			$nav.addClass('sticky');
		} else {
			$nav.removeClass('sticky');
		}
	});
});

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.81020756890799, 37.49832099999996], // Координаты МАИ
        zoom: 16, // Уровень масштабирования карты
        controls: ['zoomControl', 'geolocationControl', 'fullscreenControl']
    });

    var myPlacemark = new ymaps.Placemark([55.81020756890799, 37.49832099999996], {
        balloonContent: 'Пицца от пашки'
    });

    myMap.geoObjects.add(myPlacemark);
}


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

// Модальное окно 1
var modal1 = document.getElementById("rn1_modal");
var open_btn1 = document.getElementById("to_cart");
var open_img1 = document.getElementById("pizza1png");
var close_btn1 = document.getElementById("close_pop1");

open_btn1.onclick = function() {
    buttons_size_of_pizza1[0].classList.add('active');
    buttons_dough_of_pizza1[0].classList.add('active');
    buttons_adds_of_pizza1[0].classList.add('active_border');
    modal1.style.display = "block";
}

open_img1.onclick = function() {
    buttons_size_of_pizza1[0].classList.add('active');
    buttons_dough_of_pizza1[0].classList.add('active');
    buttons_adds_of_pizza1[0].classList.add('active_border');
    modal1.style.display = "block";
}

close_btn1.onclick = function() {
    buttons_size_of_pizza1.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_dough_of_pizza1.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_adds_of_pizza1.forEach(btn => {
        btn.classList.remove('active_border');
    });
    modal1.style.display = "none";
}

// Делаем активными и не активными кнопки для попапа 1 в зависимости от того какая была нажата
const buttons_size_of_pizza1 = document.querySelectorAll('#small_btn1, #middle_btn1, #big_btn1');
buttons_size_of_pizza1.forEach(button => {
    button.addEventListener('click', () => {
        buttons_size_of_pizza1.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const buttons_dough_of_pizza1 = document.querySelectorAll('#tradition_btn1, #thin_btn1');
buttons_dough_of_pizza1.forEach(button => {
    button.addEventListener('click', () => {
        buttons_dough_of_pizza1.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const buttons_adds_of_pizza1 = document.querySelectorAll('#image_btn_pop1, #image_btn_pop2, #image_btn_pop3, #image_btn_pop4, #image_btn_pop5, #image_btn_pop6');
buttons_adds_of_pizza1.forEach(button => {
    button.addEventListener('click', () => {
        buttons_adds_of_pizza1.forEach(btn => {
            btn.classList.remove('active_border');
        });
        button.classList.add('active_border');
    });
});

// Модальное окно 2
var modal2 = document.getElementById("rn2_modal");
var open_btn2 = document.getElementById("r1");
var close_btn2 = document.getElementById("close_pop2");

open_btn2.onclick = function() {
    buttons_size_of_pizza2[0].classList.add('active');
    buttons_dough_of_pizza2[0].classList.add('active');
    buttons_adds_of_pizza2[0].classList.add('active_border');
    modal2.style.display = "block";
}

close_btn2.onclick = function() {
    buttons_size_of_pizza2.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_dough_of_pizza2.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_adds_of_pizza2.forEach(btn => {
        btn.classList.remove('active_border');
    });
    modal1.style.display = "none";
    modal2.style.display = "none";

}
// Делаем активными и не активными кнопки для попапа 2 в зависимости от того какая была нажата
const buttons_size_of_pizza2 = document.querySelectorAll('#small_btn2, #middle_btn2, #big_btn2');
buttons_size_of_pizza2.forEach(button => {
    button.addEventListener('click', () => {
        buttons_size_of_pizza2.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const buttons_dough_of_pizza2 = document.querySelectorAll('#tradition_btn2, #thin_btn2');
buttons_dough_of_pizza2[0].classList.add('active');
buttons_dough_of_pizza2.forEach(button => {
    button.addEventListener('click', () => {
        buttons_dough_of_pizza2.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});


const buttons_adds_of_pizza2 = document.querySelectorAll('#image_btn_pop7, #image_btn_pop8, #image_btn_pop9, #image_btn_pop10, #image_btn_pop11, #image_btn_pop12');
buttons_adds_of_pizza2[0].classList.add('active_border');
buttons_adds_of_pizza2.forEach(button => {
    button.addEventListener('click', () => {
        buttons_adds_of_pizza2.forEach(btn => {
            btn.classList.remove('active_border');
        });
        button.classList.add('active_border');
    });
});

// Изменяем кол-во товаров в корзине
const cartButton = document.getElementById('cart');
const addToCartButtons = document.querySelectorAll('.to_cart_in_pop');

addToCartButtons.forEach(function(addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        let count = parseInt(cartButton.textContent.split('|')[1].trim());
        if (count < 99) {
            count++;
        } else {
            count = '99+';
        }
        cartButton.textContent = `Корзина | ${count}`; //после 99 будет 99+ писать и счетчик увеличиваться  не будет
    });
});