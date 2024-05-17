const buttons_sauce_of_pizza = document.querySelectorAll('#image_btn_cart1, #image_btn_cart2, #image_btn_cart3, #image_btn_cart4, #image_btn_cart5, #image_btn_cart6');
buttons_sauce_of_pizza[0].classList.add('active_border_sauce');
buttons_sauce_of_pizza.forEach(button => {
    button.addEventListener('click', () => {
        buttons_sauce_of_pizza.forEach(btn => {
            btn.classList.remove('active_border_sauce');
        });
        button.classList.add('active_border_sauce');
    });
});

$(document).ready(function() {
    const slider = $('.slider');
    const slides = slider.find('img');
    const slidesCount = slides.length;
    const slideWidth = slides.outerWidth();
    let currentIndex = 0;

    function updateSlider() {
        slides.hide();
        for (let i = currentIndex; i < Math.min(currentIndex + 3, slidesCount); i++) {
            $(slides[i]).show();
        }
    }
    updateSlider();
    $('#r_btn').click(function() {
        if (currentIndex < slidesCount - 3) {
            currentIndex++;
            updateSlider();
        }
    });
    $('#l_btn').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
});

const slides = document.querySelectorAll('#slide1, #slide2, #slide3, #slide4, #slide5, #slide6');
slides[0].classList.add('active_slide');
slides.forEach(button => {
    button.addEventListener('click', () => {
        slides.forEach(btn => {
            btn.classList.remove('active_slide');
        });
        button.classList.add('active_slide');
    });
});




