// Статусы заказа
setTimeout(function() {
  location.reload();
}, 300000);

const orderStatuses = [
    'заказ в обработке',
    'заказ готовится',
    'заказ собирается',
    'заказ в доставке',
    'заказ доставлен'
  ];

  function startNewOrder() {
    // Сброс текущего статуса и времени начала
    sessionStorage.removeItem('orderStartTime');
    sessionStorage.removeItem('currentStatus');
  
    // Инициализация нового заказа
    initializeOrder();
  }
  
  // Функция для инициализации заказа
  function initializeOrder() {
    const startTime = Date.now();
    const orderTime = new Date(); // Получаем текущее время
    sessionStorage.setItem('orderTime', orderTime);
    sessionStorage.setItem('orderStartTime', startTime);
    sessionStorage.setItem('currentStatus', 0); // Индекс статуса в массиве orderStatuses
    updateStatus();
  }

  function displayOrderTime() {
    const orderTime = sessionStorage.getItem('orderTime'); // Получаем время заказа из sessionStorage
    if (orderTime) {
      // Преобразуем строку обратно в объект Date
      const time = new Date(orderTime);
      // Форматируем дату и время для вывода
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const formattedDateTime = time.toLocaleString('ru-RU', options);
      // Выводим отформатированную дату и время на страницу
      document.getElementById('orderTimeDisplay').textContent = `Время заказа: ${formattedDateTime}`;
    }
  }

  document.addEventListener('DOMContentLoaded', displayOrderTime);
  
  // Функция для обновления статуса заказа
  function updateStatus() {
    const startTime = parseInt(sessionStorage.getItem('orderStartTime'), 10);
    const currentTime = Date.now();
    const timeDiff = currentTime - startTime;
    const minutesPassed = Math.floor(timeDiff / 60000); // Количество прошедших минут
    
    // Определение текущего статуса на основе прошедшего времени
    let currentStatusIndex = Math.min(minutesPassed, orderStatuses.length - 1);
    sessionStorage.setItem('currentStatus', currentStatusIndex);
    
    // Обновление текста статуса на странице
    document.getElementById('orderStatus').textContent = orderStatuses[currentStatusIndex];
    
    // Проверка, доставлен ли заказ
    if (currentStatusIndex === orderStatuses.length - 1) {
      clearInterval(statusInterval); // Остановка обновления статуса, если заказ доставлен
    }
  }
  
  // Инициализация заказа при загрузке страницы
  window.onload = function() {
    if (!sessionStorage.getItem('orderStartTime')) {
      initializeOrder();
    } else {
      updateStatus(); // Обновление статуса при перезагрузке страницы
    }
  };
  
  // Обновление статуса каждую минуту
  const statusInterval = setInterval(updateStatus, 60000);