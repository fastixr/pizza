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
  slideInterval = setInterval(moveSlides, 7000);
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
var close_btn1 = document.getElementById("close_pop1");
var open_btn1 = document.querySelectorAll(".open_modal_pizza, .pizza-list");

open_btn1.forEach(function(btn) {
    btn.addEventListener("click", function() {
        buttons_size_of_pizza1[0].classList.add('active');
        buttons_dough_of_pizza1[0].classList.add('active');
        buttons_adds_of_pizza1[0].classList.add('active_border');
        modal1.style.display = "block";
    });
});

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
var close_btn2 = document.getElementById("close_pop2");
var open_btn2 = document.querySelectorAll(".rectangle");

open_btn2.forEach(function(btn) {
    btn.addEventListener("click", function() {
        buttons_size_of_pizza2[0].classList.add('active');
        buttons_dough_of_pizza2[0].classList.add('active');
        buttons_adds_of_pizza2[0].classList.add('active_border');
        modal2.style.display = "block";
    });
});

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
buttons_dough_of_pizza2.forEach(button => {
    button.addEventListener('click', () => {
        buttons_dough_of_pizza2.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});


const buttons_adds_of_pizza2 = document.querySelectorAll('#image_btn_pop7, #image_btn_pop8, #image_btn_pop9, #image_btn_pop10, #image_btn_pop11, #image_btn_pop12');
buttons_adds_of_pizza2.forEach(button => {
    button.addEventListener('click', () => {
        buttons_adds_of_pizza2.forEach(btn => {
            btn.classList.remove('active_border');
        });
        button.classList.add('active_border');
    });
});

// Модальное окно 3
var modal3 = document.getElementById("rn3_modal");
var close_btn3 = document.getElementById("close_pop3");
var open_btn3 = document.querySelectorAll(".open_modal_salad, .salad-list");

open_btn3.forEach(function(btn) {
    btn.addEventListener("click", function() {
        buttons_size_of_pizza3[0].classList.add('active');
        buttons_dough_of_pizza3[0].classList.add('active');
        buttons_adds_of_pizza3[0].classList.add('active_border');
        modal3.style.display = "block";
    });
});

close_btn3.onclick = function() {
    buttons_size_of_pizza3.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_dough_of_pizza3.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_adds_of_pizza3.forEach(btn => {
        btn.classList.remove('active_border');
    });
    modal3.style.display = "none";

}
// Делаем активными и не активными кнопки для попапа 3 в зависимости от того какая была нажата
const buttons_size_of_pizza3 = document.querySelectorAll('#small_btn3, #middle_btn3, #big_btn3');
buttons_size_of_pizza3.forEach(button => {
    button.addEventListener('click', () => {
        buttons_size_of_pizza3.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const buttons_dough_of_pizza3 = document.querySelectorAll('#tradition_btn3, #thin_btn3');
buttons_dough_of_pizza3.forEach(button => {
    button.addEventListener('click', () => {
        buttons_dough_of_pizza3.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});


const buttons_adds_of_pizza3 = document.querySelectorAll('#image_btn_pop13, #image_btn_pop14, #image_btn_pop15, #image_btn_pop16, #image_btn_pop17, #image_btn_pop18');
buttons_adds_of_pizza3.forEach(button => {
    button.addEventListener('click', () => {
        buttons_adds_of_pizza3.forEach(btn => {
            btn.classList.remove('active_border');
        });
        button.classList.add('active_border');
    });
});

// Модальное окно 4
var modal4 = document.getElementById("rn4_modal");
var close_btn4 = document.getElementById("close_pop4");
var open_btn4 = document.querySelectorAll(".open_modal_combo, .combo-list");

open_btn4.forEach(function(btn) {
    btn.addEventListener("click", function() {
        buttons_size_of_pizza4[0].classList.add('active');
        buttons_dough_of_pizza4[0].classList.add('active');
        buttons_adds_of_pizza4[0].classList.add('active_border');
        modal4.style.display = "block";
    });
});

close_btn4.onclick = function() {
    buttons_size_of_pizza4.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_dough_of_pizza4.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_adds_of_pizza4.forEach(btn => {
        btn.classList.remove('active_border');
    });
    modal4.style.display = "none";
}

// Делаем активными и не активными кнопки для попапа 4 в зависимости от того какая была нажата
const buttons_size_of_pizza4 = document.querySelectorAll('#small_btn4, #middle_btn4, #big_btn4');
buttons_size_of_pizza4.forEach(button => {
    button.addEventListener('click', () => {
        buttons_size_of_pizza4.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const buttons_dough_of_pizza4 = document.querySelectorAll('#tradition_btn4, #thin_btn4');
buttons_dough_of_pizza4.forEach(button => {
    button.addEventListener('click', () => {
        buttons_dough_of_pizza4.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const buttons_adds_of_pizza4 = document.querySelectorAll('#image_btn_pop19, #image_btn_pop20, #image_btn_pop21, #image_btn_pop22, #image_btn_pop23, #image_btn_pop24');
buttons_adds_of_pizza4.forEach(button => {
    button.addEventListener('click', () => {
        buttons_adds_of_pizza4.forEach(btn => {
            btn.classList.remove('active_border');
        });
        button.classList.add('active_border');
    });
});

// Модальное окно 5
var modal5 = document.getElementById("rn5_modal");
var close_btn5 = document.getElementById("close_pop5");
var open_btn5 = document.querySelectorAll(".open_modal_dessert, .dessert-list");

open_btn5.forEach(function(btn) {
    btn.addEventListener("click", function() {
        buttons_size_of_pizza5[0].classList.add('active');
        buttons_dough_of_pizza5[0].classList.add('active');
        buttons_adds_of_pizza5[0].classList.add('active_border');
        modal5.style.display = "block";
    });
});

close_btn5.onclick = function() {
    buttons_size_of_pizza5.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_dough_of_pizza5.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_adds_of_pizza5.forEach(btn => {
        btn.classList.remove('active_border');
    });
    modal5.style.display = "none";
}

// Делаем активными и не активными кнопки для попапа 5 в зависимости от того какая была нажата
const buttons_size_of_pizza5 = document.querySelectorAll('#small_btn5, #middle_btn5, #big_btn5');
buttons_size_of_pizza5.forEach(button => {
    button.addEventListener('click', () => {
        buttons_size_of_pizza5.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const buttons_dough_of_pizza5 = document.querySelectorAll('#tradition_btn5, #thin_btn5');
buttons_dough_of_pizza5.forEach(button => {
    button.addEventListener('click', () => {
        buttons_dough_of_pizza5.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const buttons_adds_of_pizza5 = document.querySelectorAll('#image_btn_pop25, #image_btn_pop26, #image_btn_pop27, #image_btn_pop28, #image_btn_pop29, #image_btn_pop30');
buttons_adds_of_pizza5.forEach(button => {
    button.addEventListener('click', () => {
        buttons_adds_of_pizza5.forEach(btn => {
            btn.classList.remove('active_border');
        });
        button.classList.add('active_border');
    });
});

// Модальное окно 6
var modal6 = document.getElementById("rn6_modal");
var close_btn6 = document.getElementById("close_pop6");
var open_btn6 = document.querySelectorAll(".open_modal_drink, .drink-list");

open_btn6.forEach(function(btn) {
    btn.addEventListener("click", function() {
        buttons_size_of_pizza6[0].classList.add('active');
        buttons_dough_of_pizza6[0].classList.add('active');
        buttons_adds_of_pizza6[0].classList.add('active_border');
        modal6.style.display = "block";
    });
});

close_btn6.onclick = function() {
    buttons_size_of_pizza6.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_dough_of_pizza6.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_adds_of_pizza6.forEach(btn => {
        btn.classList.remove('active_border');
    });
    modal6.style.display = "none";
}

// Делаем активными и не активными кнопки для попапа 6 в зависимости от того какая была нажата
const buttons_size_of_pizza6 = document.querySelectorAll('#small_btn6, #middle_btn6, #big_btn6');
buttons_size_of_pizza6.forEach(button => {
    button.addEventListener('click', () => {
        buttons_size_of_pizza6.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const buttons_dough_of_pizza6 = document.querySelectorAll('#tradition_btn6, #thin_btn6');
buttons_dough_of_pizza6.forEach(button => {
    button.addEventListener('click', () => {
        buttons_dough_of_pizza6.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const buttons_adds_of_pizza6 = document.querySelectorAll('#image_btn_pop31, #image_btn_pop32, #image_btn_pop33, #image_btn_pop34, #image_btn_pop35, #image_btn_pop36');
buttons_adds_of_pizza6.forEach(button => {
    button.addEventListener('click', () => {
        buttons_adds_of_pizza6.forEach(btn => {
            btn.classList.remove('active_border');
        });
        button.classList.add('active_border');
    });
});

// УВЕЛИЧИВАЕМ КОЛ-ВО ТОВАРА
const cartButton = document.getElementById('cart');
const addToCartButtons = document.querySelectorAll('.to_cart_in_pop');

let count = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
addToCartButtons.forEach(function(addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        if (count < 99) {
            count++;
        }
        updateCartButtonText(count);
        // Сохраняем значение счетчика в localStorage
        localStorage.setItem('cartCount', count.toString());
    });
});
function updateCartButtonText(count) {
    if (count <= 99) {cartButton.textContent = `Корзина | ${count}`;}
}

document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('cart');

    let count = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
    updateCartButtonText(count);

    function updateCartButtonText(count) {
        cartButton.textContent = `Корзина | ${count}`;
    }

    window.addEventListener('storage', function(event) {
        if (event.key === 'cartCount') {
            count = parseInt(event.newValue);
            updateCartButtonText(count);
        }
    });
});


//Ставим флаги видимости товаров в корзине 
document.getElementById("to_cart_in_pop1").addEventListener("click", function() {
    localStorage.setItem("cart_item_visible1", "true"); // Устанавливаем флаг видимости элемента
});

document.getElementById("to_cart_in_pop2").addEventListener("click", function() {
    localStorage.setItem("cart_item_visible2", "true"); // Устанавливаем флаг видимости элемента
});

document.getElementById("to_cart_in_pop3").addEventListener("click", function() {
    localStorage.setItem("cart_item_visible3", "true"); // Устанавливаем флаг видимости элемента
});

document.getElementById("to_cart_in_pop4").addEventListener("click", function() {
    localStorage.setItem("cart_item_visible4", "true"); // Устанавливаем флаг видимости элемента
});

document.getElementById("to_cart_in_pop5").addEventListener("click", function() {
    localStorage.setItem("cart_item_visible5", "true"); // Устанавливаем флаг видимости элемента
});

document.getElementById("to_cart_in_pop6").addEventListener("click", function() {
    localStorage.setItem("cart_item_visible6", "true"); // Устанавливаем флаг видимости элемента
});
