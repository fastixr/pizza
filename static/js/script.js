const slides = document.querySelectorAll('.slide');
let currentImageIndex = 0; // Начинаем с первого изображения 
let slideInterval; // Переменная для хранения интервала 

function moveSlides(forward = true) {
  // Сбрасываем таймер (на случай, если функция вызывается вручную)
  clearInterval(slideInterval);

  if (forward) {
    currentImageIndex = (currentImageIndex + 1) % slides.length; // Переходим к следующему изображению 
  } else {
    currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length; // Переходим к предыдущему изображению 
  }

  // Обновляем src и alt каждого изображения в слайде 
  slides.forEach((slide, index) => {
    const img = slide.querySelector('img');
    img.src = `/static/img/slide${(currentImageIndex - index + slides.length) % slides.length + 1}.png`;
    img.alt = `Slide ${(currentImageIndex - index + slides.length) % slides.length + 1}`;
  });

  // Устанавливаем новый интервал для автопрокрутки
  slideInterval = setInterval(moveSlides, 3000); 
}

// Установка начального состояния слайдера 
moveSlides();

// Функции для перелистывания слайдов по клику на боковые слайды
function moveRight() {
  moveSlides(true);
}

function moveLeft() {
  moveSlides(false);
}

// Добавляем обработчики событий только для первого и последнего слайда
slides[0].addEventListener('click', moveLeft);  // Клик на первый слайд - влево
slides[slides.length - 1].addEventListener('click', moveRight); // Клик на последний слайд - вправо
