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