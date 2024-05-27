$(function() {
    var $overlay = $('.overlay');
    var $mainPopUp = $('.main-popup')
    var $signIn = $('#sign-in');
    var $register = $('#register');
    var $formSignIn = $('form.sign-in');
    var $formRegister = $('form.register');
    
    $('#login').on('click', function(){
      $overlay.addClass('visible');
      $mainPopUp.addClass('visible');
      $signIn.addClass('active');
      $signIn.hide();
      $register.show();
      $register.removeClass('active');
      $formRegister.removeClass('move-left');
      $formRegister.hide();
      $formSignIn.show();
      $formSignIn.removeClass('move-left');
    });
    $overlay.on('click', function(){
      $(this).removeClass('visible');
      $mainPopUp.removeClass('visible');
    });
    $('#popup-close-button a').on('click', function(e){
      e.preventDefault();
      $overlay.removeClass('visible');
      $mainPopUp.removeClass('visible');
    });
    
    $signIn.on('click', function(){
      $signIn.addClass('active');
      $signIn.hide();
      $register.removeClass('active');
      $register.show();
      $formSignIn.show();
      $formSignIn.removeClass('move-left');
      $formRegister.removeClass('move-left');
      $formRegister.hide();
    });
    
    $register.on('click', function(){
      $signIn.removeClass('active');
      $signIn.show();
      $register.addClass('active');
      $register.hide();
      $formSignIn.addClass('move-left');
      $formSignIn.hide();
      $formRegister.show();
      $formRegister.addClass('move-left');
    });
  });

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
        // buttons_size_of_pizza3[0].classList.add('active');
        // buttons_dough_of_pizza3[0].classList.add('active');
        buttons_adds_of_pizza3[0].classList.add('active_border');
        modal3.style.display = "block";
    });
});

close_btn3.onclick = function() {
    // buttons_size_of_pizza3.forEach(btn => {
    //     btn.classList.remove('active');
    // });
    // buttons_dough_of_pizza3.forEach(btn => {
    //     btn.classList.remove('active');
    // });
    buttons_adds_of_pizza3.forEach(btn => {
        btn.classList.remove('active_border');
    });
    modal3.style.display = "none";

}
// Делаем активными и не активными кнопки для попапа 3 в зависимости от того какая была нажата
// const buttons_size_of_pizza3 = document.querySelectorAll('#small_btn3, #middle_btn3, #big_btn3');
// buttons_size_of_pizza3.forEach(button => {
//     button.addEventListener('click', () => {
//         buttons_size_of_pizza3.forEach(btn => {
//             btn.classList.remove('active');
//         });
//         button.classList.add('active');
//     });
// });

// const buttons_dough_of_pizza3 = document.querySelectorAll('#tradition_btn3, #thin_btn3');
// buttons_dough_of_pizza3.forEach(button => {
//     button.addEventListener('click', () => {
//         buttons_dough_of_pizza3.forEach(btn => {
//             btn.classList.remove('active');
//         });
//         button.classList.add('active');
//     });
// });


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
        // buttons_size_of_pizza4[0].classList.add('active');
        buttons_dough_of_pizza4[0].classList.add('active');
        buttons_adds_of_pizza4[0].classList.add('active_border');
        modal4.style.display = "block";
    });
});

close_btn4.onclick = function() {
    // buttons_size_of_pizza4.forEach(btn => {
    //     btn.classList.remove('active');
    // });
    buttons_dough_of_pizza4.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons_adds_of_pizza4.forEach(btn => {
        btn.classList.remove('active_border');
    });
    modal4.style.display = "none";
}

// Делаем активными и не активными кнопки для попапа 4 в зависимости от того какая была нажата
// const buttons_size_of_pizza4 = document.querySelectorAll('#small_btn4, #middle_btn4, #big_btn4');
// buttons_size_of_pizza4.forEach(button => {
//     button.addEventListener('click', () => {
//         buttons_size_of_pizza4.forEach(btn => {
//             btn.classList.remove('active');
//         });
//         button.classList.add('active');
//     });
// });

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
        // buttons_size_of_pizza5[0].classList.add('active');
        // buttons_dough_of_pizza5[0].classList.add('active');
        buttons_adds_of_pizza5[0].classList.add('active_border');
        modal5.style.display = "block";
    });
});

close_btn5.onclick = function() {
    // buttons_size_of_pizza5.forEach(btn => {
    //     btn.classList.remove('active');
    // });
    // buttons_dough_of_pizza5.forEach(btn => {
    //     btn.classList.remove('active');
    // });
    buttons_adds_of_pizza5.forEach(btn => {
        btn.classList.remove('active_border');
    });
    modal5.style.display = "none";
}

// Делаем активными и не активными кнопки для попапа 5 в зависимости от того какая была нажата
// const buttons_size_of_pizza5 = document.querySelectorAll('#small_btn5, #middle_btn5, #big_btn5');
// buttons_size_of_pizza5.forEach(button => {
//     button.addEventListener('click', () => {
//         buttons_size_of_pizza5.forEach(btn => {
//             btn.classList.remove('active');
//         });
//         button.classList.add('active');
//     });
// });

// const buttons_dough_of_pizza5 = document.querySelectorAll('#tradition_btn5, #thin_btn5');
// buttons_dough_of_pizza5.forEach(button => {
//     button.addEventListener('click', () => {
//         buttons_dough_of_pizza5.forEach(btn => {
//             btn.classList.remove('active');
//         });
//         button.classList.add('active');
//     });
// });

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
        // buttons_dough_of_pizza6[0].classList.add('active');
        buttons_adds_of_pizza6[0].classList.add('active_border');
        modal6.style.display = "block";
    });
});

close_btn6.onclick = function() {
    buttons_size_of_pizza6.forEach(btn => {
        btn.classList.remove('active');
    });
    // buttons_dough_of_pizza6.forEach(btn => {
    //     btn.classList.remove('active');
    // });
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

// const buttons_dough_of_pizza6 = document.querySelectorAll('#tradition_btn6, #thin_btn6');
// buttons_dough_of_pizza6.forEach(button => {
//     button.addEventListener('click', () => {
//         buttons_dough_of_pizza6.forEach(btn => {
//             btn.classList.remove('active');
//         });
//         button.classList.add('active');
//     });
// });

const buttons_adds_of_pizza6 = document.querySelectorAll('#image_btn_pop31, #image_btn_pop32, #image_btn_pop33, #image_btn_pop34, #image_btn_pop35, #image_btn_pop36');
buttons_adds_of_pizza6.forEach(button => {
    button.addEventListener('click', () => {
        buttons_adds_of_pizza6.forEach(btn => {
            btn.classList.remove('active_border');
        });
        button.classList.add('active_border');
    });
});

// ИЗМЕНЕНИЕ СТОИМОСТИ В ЗАВИСИМОСТИ ОТ ТОППИНГОВ, ТЕСТА, ОБЪЕМА, РАЗМЕРА

// МОДАЛЬНОЕ ОКНО Пиццы
var closePop1 = document.getElementById("close_pop1");
var smallBtn1 = document.getElementById("small_btn1");
var middleBtn1 = document.getElementById("middle_btn1");
var bigBtn1 = document.getElementById("big_btn1");
var addToCartBtn1 = document.getElementById("to_cart_in_pop1");
// Устанавливаем начальную цену
var basePrice1 = 450;
sessionStorage.setItem('rn1_modal_price', basePrice1);
var middleBtnTaped1 = false;
var bigBtnTaped1 = false;
var smallBtnTaped1 = false;
var prevBtnTaped1 = "small";
// Функция для обновления цены при выборе размера
function updatePriceSize1(event) {
    if (event.target === middleBtn1) {
        if (prevBtnTaped1 === "big") {basePrice1 -= 120;}
        if (!middleBtnTaped1) {
            basePrice1 += 75;
            middleBtnTaped1 = true;
            smallBtnTaped1 = false;
            bigBtnTaped1 = false;
            prevBtnTaped1 = "middle";
            sessionStorage.setItem('rn1_modal_price', basePrice1);
        }
    }
    if (event.target === bigBtn1) {
        if (prevBtnTaped1 === "middle") {basePrice1 -= 75;}
        if (!bigBtnTaped1) {
            basePrice1 += 120;
            bigBtnTaped1 = true;
            smallBtnTaped1 = false;
            middleBtnTaped1 = false;
            prevBtnTaped1 = "big";
            sessionStorage.setItem('rn1_modal_price', basePrice1);
        }
    }
    if (event.target === smallBtn1) {
        if (!smallBtnTaped1) {
            if (prevBtnTaped1 === "middle") {basePrice1 -= 75;}
            if (prevBtnTaped1 === "big") {basePrice1 -= 120;}
            smallBtnTaped1 = false;
            middleBtnTaped1 = false;
            bigBtnTaped1 = false;
            smallBtnTaped1 = true;
            prevBtnTaped1 = "small";
            sessionStorage.setItem('rn1_modal_price', basePrice1);
        }
    }
    if (event.target === closePop1) {
        basePrice1 = 450;
        middleBtnTaped1 = false;
        bigBtnTaped1 = false;
    }
    addToCartBtn1.textContent = "Добавить в корзину " + (basePrice1) + " ₽";
}
smallBtn1.addEventListener("click", updatePriceSize1);
middleBtn1.addEventListener("click", updatePriceSize1);
bigBtn1.addEventListener("click", updatePriceSize1);
closePop1.addEventListener("click", updatePriceSize1);

// ТОППИНГИ
var toppingBtnIds1 = [];
var numWithoutBtn1 = document.getElementById("image_btn_pop1");
var numStartButtons1 = 2;
var numEndButtons1 = 6;
var countTapsWithout1 = 0;
var toppingBtnIdsTapped1 = false;
var numWithoutBtnTapped1 = false;
for (numStartButtons1; numStartButtons1 <= numEndButtons1; numStartButtons1++) {
    toppingBtnIds1.push("image_btn_pop" + numStartButtons1);
}
function updatePriceTopping1(event) {
    if (toppingBtnIds1.includes(event.target.id) && !toppingBtnIdsTapped1) {
        basePrice1 += 50;
        toppingBtnIdsTapped1 = true;
        numWithoutBtnTapped1 = false;
        sessionStorage.setItem('rn1_modal_price', basePrice1);
    } 
    if (event.target === numWithoutBtn1 && !numWithoutBtnTapped1) {
        basePrice1 -= 50;
        numWithoutBtnTapped1 = true;
        toppingBtnIdsTapped1 = false;
        sessionStorage.setItem('rn1_modal_price', basePrice1);
    }
    if (event.target === closePop1) {
        basePrice1 = 450;
        numWithoutBtnTapped1 = false;
        toppingBtnIdsTapped1 = false;
    }
    addToCartBtn1.textContent = "Добавить в корзину " + (basePrice1) + " ₽";
}
toppingBtnIds1.forEach(function(id) {
    var btn = document.getElementById(id);
    btn.addEventListener("click", updatePriceTopping1);
});
closePop1.addEventListener("click", updatePriceTopping1);
numWithoutBtn1.addEventListener("click", updatePriceTopping1);
// КОНЕЦ МОДАЛЬНОГО ОКНА Пицц

// МОДАЛЬНОЕ ОКНО Новинки
var closePop2 = document.getElementById("close_pop2");
var smallBtn2 = document.getElementById("small_btn2");
var middleBtn2 = document.getElementById("middle_btn2");
var bigBtn2 = document.getElementById("big_btn2");
var addToCartBtn2 = document.getElementById("to_cart_in_pop2");
// Устанавливаем начальную цену
var basePrice2 = 320;
sessionStorage.setItem('rn2_modal_price', basePrice2);
var middleBtnTaped2 = false;
var bigBtnTaped2 = false;
var smallBtnTaped2 = false;
var prevBtnTaped2 = "small";
// Функция для обновления цены при выборе размера
function updatePriceSize2(event) {
    if (event.target === middleBtn2) {
        if (prevBtnTaped2 === "big") {basePrice2 -= 120;}
        if (!middleBtnTaped2) {
            basePrice2 += 75;
            middleBtnTaped2 = true;
            smallBtnTaped2 = false;
            bigBtnTaped2 = false;
            prevBtnTaped2 = "middle";
            sessionStorage.setItem('rn2_modal_price', basePrice2);
        }
    }
    if (event.target === bigBtn2) {
        if (prevBtnTaped2 === "middle") {basePrice2 -= 75;}
        if (!bigBtnTaped2) {
            basePrice2 += 120;
            bigBtnTaped2 = true;
            smallBtnTaped2 = false;
            middleBtnTaped2 = false;
            prevBtnTaped2 = "big";
            sessionStorage.setItem('rn2_modal_price', basePrice2);
        }
    }
    if (event.target === smallBtn2) {
        if (!smallBtnTaped2) {
            if (prevBtnTaped2 === "middle") {basePrice2 -= 75;}
            if (prevBtnTaped2 === "big") {basePrice2 -= 120;}
            smallBtnTaped2 = false;
            middleBtnTaped2 = false;
            bigBtnTaped2 = false;
            smallBtnTaped2 = true;
            prevBtnTaped2 = "small";
            sessionStorage.setItem('rn2_modal_price', basePrice2);
        }
    }
    if (event.target === closePop2) {
        basePrice2 = 320;
        middleBtnTaped2 = false;
        bigBtnTaped2 = false;
    }
    addToCartBtn2.textContent = "Добавить в корзину " + (basePrice2) + " ₽";
}
smallBtn2.addEventListener("click", updatePriceSize2);
middleBtn2.addEventListener("click", updatePriceSize2);
bigBtn2.addEventListener("click", updatePriceSize2);
closePop2.addEventListener("click", updatePriceSize2);

// ТОППИНГИ
var toppingBtnIds2 = [];
var numWithoutBtn2 = document.getElementById("image_btn_pop7");
var numStartButtons2 = 8; // номера кнопок от
var numEndButtons2 = 14; // номера кнопок по
var countTapsWithout2 = 0;
var toppingBtnIdsTapped2 = false;
var numWithoutBtnTapped2 = false;
for (numStartButtons2; numStartButtons2 <= numEndButtons2; numStartButtons2++) {
    toppingBtnIds2.push("image_btn_pop" + numStartButtons2);
}
function updatePriceTopping2(event) {
    if (toppingBtnIds2.includes(event.target.id) && !toppingBtnIdsTapped2) {
        basePrice2 += 50;
        toppingBtnIdsTapped2 = true;
        numWithoutBtnTapped2 = false;
        sessionStorage.setItem('rn2_modal_price', basePrice2);
    } 
    if (event.target === numWithoutBtn2 && !numWithoutBtnTapped2) {
        basePrice2 -= 50;
        numWithoutBtnTapped2 = true;
        toppingBtnIdsTapped2 = false;
        sessionStorage.setItem('rn2_modal_price', basePrice2);
    }
    if (event.target === closePop2) {
        basePrice2 = 320;
        numWithoutBtnTapped2 = false;
        toppingBtnIdsTapped2 = false;
    }
    addToCartBtn2.textContent = "Добавить в корзину " + (basePrice2) + " ₽";
}
toppingBtnIds2.forEach(function(id) {
    var btn = document.getElementById(id);
    btn.addEventListener("click", updatePriceTopping2);
});
closePop2.addEventListener("click", updatePriceTopping2);
numWithoutBtn2.addEventListener("click", updatePriceTopping2);
// КОНЕЦ МОДАЛЬНОГО ОКНА Новинки

// МОДАЛЬНОЕ ОКНО Салаты
var closePop3 = document.getElementById("close_pop3");
var addToCartBtn3 = document.getElementById("to_cart_in_pop3");
// Устанавливаем начальную цену
var basePrice3 = 230;
sessionStorage.setItem('rn3_modal_price', basePrice3);
// ТОППИНГИ
var toppingBtnIds3 = [];
var numWithoutBtn3 = document.getElementById("image_btn_pop13");
var numStartButtons3 = 14;
var numEndButtons3 = 18;
var countTapsWithout3 = 0;
var toppingBtnIdsTapped3 = false;
var numWithoutBtnTapped3 = false;
for (numStartButtons3; numStartButtons3 <= numEndButtons3; numStartButtons3++) {
    toppingBtnIds3.push("image_btn_pop" + numStartButtons3);
}
function updatePriceTopping3(event) {
    if (toppingBtnIds3.includes(event.target.id) && !toppingBtnIdsTapped3) {
        basePrice3 += 50;
        toppingBtnIdsTapped3 = true;
        numWithoutBtnTapped3 = false;
        sessionStorage.setItem('rn3_modal_price', basePrice3);
    } 
    if (event.target === numWithoutBtn3 && !numWithoutBtnTapped3) {
        basePrice3 -= 50;
        numWithoutBtnTapped3 = true;
        toppingBtnIdsTapped3 = false;
        sessionStorage.setItem('rn3_modal_price', basePrice3);
    }
    if (event.target === closePop3) {
        basePrice3 = 230;
        numWithoutBtnTapped3 = false;
        toppingBtnIdsTapped3 = false;
    }
    addToCartBtn3.textContent = "Добавить в корзину " + (basePrice3) + " ₽";
}
toppingBtnIds3.forEach(function(id) {
    var btn = document.getElementById(id);
    btn.addEventListener("click", updatePriceTopping3);
});
closePop3.addEventListener("click", updatePriceTopping3);
numWithoutBtn3.addEventListener("click", updatePriceTopping3);

// КОНЕЦ МОДАЛЬНОГО ОКНА Салаты

// МОДАЛЬНОЕ ОКНО Комбо
var closePop4 = document.getElementById("close_pop4");
var addToCartBtn4 = document.getElementById("to_cart_in_pop4");
// Устанавливаем начальную цену
var basePrice4 = 600;
sessionStorage.setItem('rn4_modal_price', basePrice4);
// ТОППИНГИ
var toppingBtnIds4 = [];
var numWithoutBtn4 = document.getElementById("image_btn_pop19");
var numStartButtons4 = 20;
var numEndButtons4 = 24;
var countTapsWithout4 = 0;
var toppingBtnIdsTapped4 = false;
var numWithoutBtnTapped4 = false;
for (numStartButtons4; numStartButtons4 <= numEndButtons4; numStartButtons4++) {
    toppingBtnIds4.push("image_btn_pop" + numStartButtons4);
}
function updatePriceTopping4(event) {
    if (toppingBtnIds4.includes(event.target.id) && !toppingBtnIdsTapped4) {
        basePrice4 += 50;
        toppingBtnIdsTapped4 = true;
        numWithoutBtnTapped4 = false;
        sessionStorage.setItem('rn4_modal_price', basePrice4);
    } 
    if (event.target === numWithoutBtn4 && !numWithoutBtnTapped4) {
        basePrice4 -= 50;
        numWithoutBtnTapped4 = true;
        toppingBtnIdsTapped4 = false;
        sessionStorage.setItem('rn4_modal_price', basePrice4);
    }
    if (event.target === closePop4) {
        basePrice4 = 450;
        numWithoutBtnTapped4 = false;
        toppingBtnIdsTapped4 = false;
    }
    addToCartBtn4.textContent = "Добавить в корзину " + (basePrice4) + " ₽";
}
toppingBtnIds4.forEach(function(id) {
    var btn = document.getElementById(id);
    btn.addEventListener("click", updatePriceTopping4);
});
closePop4.addEventListener("click", updatePriceTopping4);
numWithoutBtn4.addEventListener("click", updatePriceTopping4);
// КОНЕЦ МОДАЛЬНОГО ОКНА Комбо

// МОДАЛЬНОЕ ОКНО Десерты
var closePop5 = document.getElementById("close_pop5");
var addToCartBtn5 = document.getElementById("to_cart_in_pop5");
// Устанавливаем начальную цену
var basePrice5 = 249;
sessionStorage.setItem('rn5_modal_price', basePrice5);
// ТОППИНГИ
var toppingBtnIds5 = [];
var numWithoutBtn5 = document.getElementById("image_btn_pop25");
var numStartButtons5 = 26;
var numEndButtons5 = 30;
var countTapsWithout5 = 0;
var toppingBtnIdsTapped5 = false;
var numWithoutBtnTapped5 = false;
for (numStartButtons5; numStartButtons5 <= numEndButtons5; numStartButtons5++) {
    toppingBtnIds5.push("image_btn_pop" + numStartButtons5);
}
function updatePriceTopping5(event) {
    if (toppingBtnIds5.includes(event.target.id) && !toppingBtnIdsTapped5) {
        basePrice5 += 50;
        toppingBtnIdsTapped5 = true;
        numWithoutBtnTapped5 = false;
        sessionStorage.setItem('rn5_modal_price', basePrice5);
    } 
    if (event.target === numWithoutBtn5 && !numWithoutBtnTapped5) {
        basePrice5 -= 50;
        numWithoutBtnTapped5 = true;
        toppingBtnIdsTapped5 = false;
        sessionStorage.setItem('rn5_modal_price', basePrice5);
    }
    if (event.target === closePop5) {
        basePrice5 = 249;
        numWithoutBtnTapped5 = false;
        toppingBtnIdsTapped5 = false;
    }
    addToCartBtn5.textContent = "Добавить в корзину " + (basePrice5) + " ₽";
}
toppingBtnIds5.forEach(function(id) {
    var btn = document.getElementById(id);
    btn.addEventListener("click", updatePriceTopping5);
});
closePop5.addEventListener("click", updatePriceTopping5);
numWithoutBtn5.addEventListener("click", updatePriceTopping5);
// КОНЕЦ МОДАЛЬНОГО ОКНА Десерты

// МОДАЛЬНОЕ ОКНО Напитки
var closePop6 = document.getElementById("close_pop6");
var smallBtn6 = document.getElementById("small_btn6");
var middleBtn6 = document.getElementById("middle_btn6");
var bigBtn6 = document.getElementById("big_btn6");
var addToCartBtn6 = document.getElementById("to_cart_in_pop6");
// Устанавливаем начальную цену
var basePrice6 = 120;
sessionStorage.setItem('rn6_modal_price', basePrice6);
var middleBtnTaped6 = false;
var bigBtnTaped6 = false;
var smallBtnTaped6 = false;
var prevBtnTaped6 = "small";
// Функция для обновления цены при выборе размера
function updatePriceSize6(event) {
    if (event.target === middleBtn6) {
        if (prevBtnTaped6 === "big") {basePrice6 -= 75;}
        if (!middleBtnTaped6) {
            basePrice6 += 50;
            middleBtnTaped6 = true;
            smallBtnTaped6 = false;
            bigBtnTaped6 = false;
            prevBtnTaped6 = "middle";
            sessionStorage.setItem('rn6_modal_price', basePrice6);
        }
    }
    if (event.target === bigBtn6) {
        if (prevBtnTaped6 === "middle") {basePrice6 -= 50;}
        if (!bigBtnTaped6) {
            basePrice6 += 75;
            bigBtnTaped6 = true;
            smallBtnTaped6 = false;
            middleBtnTaped6 = false;
            prevBtnTaped6 = "big";
            sessionStorage.setItem('rn6_modal_price', basePrice6);
        }
    }
    if (event.target === smallBtn6) {
        if (!smallBtnTaped6) {
            if (prevBtnTaped6 === "middle") {basePrice6 -= 50;}
            if (prevBtnTaped6 === "big") {basePrice6 -= 75;}
            smallBtnTaped6 = false;
            middleBtnTaped6 = false;
            bigBtnTaped6 = false;
            smallBtnTaped6 = true;
            prevBtnTaped6 = "small";
            sessionStorage.setItem('rn6_modal_price', basePrice6);
        }
    }
    if (event.target === closePop6) {
        basePrice6 = 120;
        middleBtnTaped6 = false;
        bigBtnTaped6 = false;
    }
    addToCartBtn6.textContent = "Добавить в корзину " + (basePrice6) + " ₽";
}
smallBtn6.addEventListener("click", updatePriceSize6);
middleBtn6.addEventListener("click", updatePriceSize6);
bigBtn6.addEventListener("click", updatePriceSize6);
closePop6.addEventListener("click", updatePriceSize6);

// ТОППИНГИ
var toppingBtnIds6 = [];
var numWithoutBtn6 = document.getElementById("image_btn_pop31");
var numStartButtons6 = 32;
var numEndButtons6 = 36;
var countTapsWithout6 = 0;
var toppingBtnIdsTapped6 = false;
var numWithoutBtnTapped6 = false;
for (numStartButtons6; numStartButtons6 <= numEndButtons6; numStartButtons6++) {
    toppingBtnIds6.push("image_btn_pop" + numStartButtons6);
}
function updatePriceTopping6(event) {
    if (toppingBtnIds6.includes(event.target.id) && !toppingBtnIdsTapped6) {
        basePrice6 += 50;
        toppingBtnIdsTapped6 = true;
        numWithoutBtnTapped6 = false;
        sessionStorage.setItem('rn6_modal_price', basePrice6);
    } 
    if (event.target === numWithoutBtn6 && !numWithoutBtnTapped6) {
        basePrice6 -= 50;
        numWithoutBtnTapped6 = true;
        toppingBtnIdsTapped6 = false;
        sessionStorage.setItem('rn6_modal_price', basePrice6);
    }
    if (event.target === closePop6) {
        basePrice6 = 120;
        numWithoutBtnTapped6 = false;
        toppingBtnIdsTapped6 = false;
    }
    addToCartBtn6.textContent = "Добавить в корзину " + (basePrice6) + " ₽";
}
toppingBtnIds6.forEach(function(id) {
    var btn = document.getElementById(id);
    btn.addEventListener("click", updatePriceTopping6);
});
closePop6.addEventListener("click", updatePriceTopping6);
numWithoutBtn6.addEventListener("click", updatePriceTopping6);
// КОНЕЦ МОДАЛЬНОГО ОКНА Напитки


// УВЕЛИЧИВАЕМ КОЛ-ВО ТОВАРА
//const cartButton = document.getElementById('cart');
//const addToCartButtons = document.querySelectorAll('.to_cart_in_pop');

//let count = sessionStorage.getItem('cartCount') ? parseInt(sessionStorage.getItem('cartCount')) : 0;
//addToCartButtons.forEach(function(addToCartButton) {
//    addToCartButton.addEventListener('click', function() {
//       if (count < 99) {
//            count++;
//        }
//        updateCartButtonText(count);
        // Сохраняем значение счетчика в sessionStorage
//        sessionStorage.setItem('cartCount', count.toString());
//    });
//});
//function updateCartButtonText(count) {
//    if (count <= 99) {cartButton.textContent = `Корзина | ${count}`;}
//}

//document.addEventListener('DOMContentLoaded', function() {
//    const cartButton = document.getElementById('cart');
//
//    let count = sessionStorage.getItem('cartCount') ? parseInt(sessionStorage.getItem('cartCount')) : 0;
//    updateCartButtonText(count);

//    function updateCartButtonText(count) {
//        cartButton.textContent = `Корзина | ${count}`;
//    }

//    window.addEventListener('storage', function(event) {
//        if (event.key === 'cartCount') {
//            count = parseInt(event.newValue);
//            updateCartButtonText(count);
//        }
//    });
//});


//Ставим флаги видимости товаров в корзине 
document.getElementById("to_cart_in_pop1").addEventListener("click", function() {
    sessionStorage.setItem("cart_item_visible1", "true"); // Устанавливаем флаг видимости элемента
});

document.getElementById("to_cart_in_pop2").addEventListener("click", function() {
    sessionStorage.setItem("cart_item_visible2", "true"); // Устанавливаем флаг видимости элемента
});

document.getElementById("to_cart_in_pop3").addEventListener("click", function() {
    sessionStorage.setItem("cart_item_visible3", "true"); // Устанавливаем флаг видимости элемента
});

document.getElementById("to_cart_in_pop4").addEventListener("click", function() {
    sessionStorage.setItem("cart_item_visible4", "true"); // Устанавливаем флаг видимости элемента
});

document.getElementById("to_cart_in_pop5").addEventListener("click", function() {
    sessionStorage.setItem("cart_item_visible5", "true"); // Устанавливаем флаг видимости элемента
});

document.getElementById("to_cart_in_pop6").addEventListener("click", function() {
    sessionStorage.setItem("cart_item_visible6", "true"); // Устанавливаем флаг видимости элемента
});
