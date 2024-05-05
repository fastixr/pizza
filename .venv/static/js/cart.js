// Слайдер в корзине и кнопки
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
    const sliderCart = $('.slider_cart');
    const slidesCart = sliderCart.find('img');
    const slidesCountCart = slidesCart.length;
    let currentIndexCart = 0;

    function updateSlider() {
        slidesCart.hide();
        for (let i = currentIndexCart; i < Math.min(currentIndexCart + 3, slidesCountCart); i++) {
            $(slidesCart[i]).show();
        }
    }
    updateSlider(); // Обновляем слайдер при загрузке страницы
    $('#r_btn').click(function() {
        if (currentIndexCart < slidesCountCart - 3) {
            currentIndexCart++;
            updateSlider();
        }
    });
    $('#l_btn').click(function() {
        if (currentIndexCart > 0) {
            currentIndexCart--;
            updateSlider();
        }
    });
});


const slidesCartAdds = document.querySelectorAll('#slide1, #slide2, #slide3, #slide4, #slide5, #slide6');
slidesCartAdds[0].classList.add('active_slide');
slidesCartAdds.forEach(button => {
    button.addEventListener('click', () => {
        slidesCartAdds.forEach(btn => {
            btn.classList.remove('active_slide');
        });
        button.classList.add('active_slide');
    });
});