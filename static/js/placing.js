const cardCheckbox = document.getElementById('card_method');
const cashCheckbox = document.getElementById('cash_method');
const cardInput = document.getElementById('card-input');
const cashInput = document.getElementById('cash-input');

cardCheckbox.addEventListener('change', () => {
    cardInput.style.display = cardCheckbox.checked ? 'block' : 'none';
    cashInput.style.display = 'none';
});

cashCheckbox.addEventListener('change', () => {
    cashInput.style.display = cashCheckbox.checked ? 'block' : 'none';
    cardInput.style.display = 'none';
});

const inputField_phone_pl = document.getElementById('phone_form_pl');
const editButton_phone_pl = document.getElementById('edit_phone_button_pl');

editButton_phone_pl.addEventListener('click', function(event) {
    event.preventDefault();
  if (editButton_phone_pl.textContent === 'Изменить') {
    event.stopPropagation();
    inputField_phone_pl.disabled = false;
    editButton_phone_pl.textContent = 'Сохранить';
  } else {
    inputField_phone_pl.disabled = true;
    editButton_phone_pl.textContent = 'Изменить';
  }
});

// const inputField_time_pl = document.getElementById('time_form_pl');
// const editButton_time_pl = document.getElementById('edit_time_button_pl');

// editButton_time_pl.addEventListener('click', function(event) {
//     event.preventDefault();
//   if (editButton_time_pl.textContent === 'Изменить') {
//     event.stopPropagation();
//     inputField_time_pl.disabled = false;
//     editButton_time_pl.textContent = 'Сохранить';
//   } else {
//     inputField_time_pl.disabled = true;
//     editButton_time_pl.textContent = 'Изменить';
//   }
// });

const inputField_promo_pl = document.getElementById('promo_form_pl');
const editButton_promo_pl = document.getElementById('edit_promo_button_pl');

editButton_promo_pl.addEventListener('click', function(event) {
    event.preventDefault();
  if (editButton_promo_pl.textContent === 'Применить') {
    inputField_promo_pl.disabled = true;
    editButton_promo_pl.textContent = 'Изменить';
  } else {
    inputField_promo_pl.disabled = false;
    editButton_promo_pl.textContent = 'Применить';
  }
});

const inputField_name_pl = document.getElementById('name_form_pl');
const editButton_name_pl = document.getElementById('edit_name_button_pl');

editButton_name_pl.addEventListener('click', function(event) {
    event.preventDefault();
  if (editButton_name_pl.textContent === 'Изменить') {
    event.stopPropagation();
    inputField_name_pl.disabled = false;
    editButton_name_pl.textContent = 'Сохранить';
  } else {
    inputField_name_pl.disabled = true;
    editButton_name_pl.textContent = 'Изменить';
  }
});

const inputField_save_card_1 = document.getElementById('card_name_form_pl');
const inputField_save_card_2 = document.getElementById('date_form_pl');
const inputField_save_card_3 = document.getElementById('cvc_form_pl');
const editButton_save_card_pl = document.getElementById('save_card_button');

editButton_save_card_pl.addEventListener('click', function(event) {
    event.preventDefault();
  if (editButton_save_card_pl.textContent === 'Изменить') {
    event.stopPropagation();
    inputField_save_card_1.disabled = false;
    inputField_save_card_2.disabled = false;
    inputField_save_card_3.disabled = false;
    editButton_save_card_pl.textContent = 'Сохранить';
  } else {
    inputField_save_card_1.disabled = true;
    inputField_save_card_2.disabled = true;
    inputField_save_card_3.disabled = true;
    editButton_save_card_pl.textContent = 'Изменить';
  }
});

save_cash_button

const inputField_save_cash_pl = document.getElementById('cash_change_pl');
const editButton_save_cash_pl = document.getElementById('save_cash_button');

editButton_save_cash_pl.addEventListener('click', function(event) {
    event.preventDefault();
  if (editButton_save_cash_pl.textContent === 'Изменить') {
    event.stopPropagation();
    inputField_save_cash_pl.disabled = false;
    editButton_save_cash_pl.textContent = 'Выбрать';
  } else {
    inputField_save_cash_pl.disabled = true;
    editButton_save_cash_pl.textContent = 'Изменить';
  }
});

// КАРТА ДОСТАВКИ

var modal1 = document.getElementById("map_modal");
var close_btn11 = document.getElementById("close_pop_map");
var close_btn12 = document.getElementById("submit_address");
var open_btn1 = document.getElementById("edit_address_button_pl");


open_btn1.addEventListener("click", function(event) {
  event.preventDefault();
  modal1.style.display = "block";
});

close_btn11.onclick = function() {
  modal1.style.display = "none";
}

close_btn12.onclick = function() {
  modal1.style.display = "none";
}


var map;
var placemark;
var polygon;

ymaps.ready(init);
function init() {
    map = new ymaps.Map("map_delivery", {
        center: [55.76, 37.64],
        zoom: 10,
        controls: ['zoomControl', 'geolocationControl', 'fullscreenControl']
    });

    // Определение координат полигона
    var polygonCoords = [
        [55.90618550624157, 37.53028718652291],
        [55.89745774178388, 37.508657853025824],
        [55.889065656337166, 37.48908845605324],
        [55.88713618360995, 37.48222200097513],
        [55.88424179389253, 37.47123567285011],
        [55.88289100451155, 37.46162263574073],
        [55.88289100451155, 37.45269624413918],
        [55.88009279068106, 37.43896333398313],
        [55.875267808302446, 37.423857132811285],
        [55.87000789155742, 37.40995256127808],
        [55.8650851195679, 37.402571122069105],
        [55.86074097687791, 37.39827958764532],
        [55.847415896937605, 37.39158479394415],
        [55.84432536791738, 37.39227143945196],
        [55.839689111697574, 37.3953613442371],
        [55.835728536476466, 37.39621965112188],
        [55.827033170090644, 37.393988053221555],
        [55.81176324864926, 37.38986818017469],
        [55.8048994886084, 37.38626329125868],
        [55.80151549765953, 37.38386003198133],
        [55.793972969455574, 37.37613527001843],
        [55.786235518967594, 37.36995546044813],
        [55.7817857860017, 37.36995546044813],
        [55.76572380966777, 37.36926881494045],
        [55.748106050971444, 37.36926881494045],
        [55.74229624681965, 37.37132875146388],
        [55.72815542741066, 37.378195206541996],
        [55.714203277821795, 37.38574830712794],
        [55.70140940954691, 37.39982454003809],
        [55.69190821021393, 37.41218415917872],
        [55.67910701031796, 37.41939393701075],
        [55.67037650645713, 37.426260392088864],
        [55.66232330739942, 37.432611863036165],
        [55.63931886579934, 37.45904771508697],
        [55.62086668277476, 37.480505387206094],
        [55.60328043381249, 37.50127641381743],
        [55.59793497678599, 37.50848619164954],
        [55.59521337220697, 37.515352646727656],
        [55.58840853125693, 37.54316178979408],
        [55.57849078428241, 37.58401719750892],
        [55.57635133247301, 37.59740678491125],
        [55.572072077592644, 37.67156449975501],
        [55.57343370949092, 37.68014756860266],
        [55.57693483095653, 37.68838731469643],
        [55.59210273483821, 37.72889939965735],
        [55.60026762983699, 37.750185410399524],
        [55.609985518241686, 37.767351548094865],
        [55.62358650015955, 37.792757431883985],
        [55.651162509878134, 37.83532945336837],
        [55.65640363020039, 37.839449326415235],
        [55.663972893463665, 37.83910600366134],
        [55.68977496928673, 37.829836289305874],
        [55.69578653103338, 37.829836289305874],
        [55.70024612213711, 37.83189622582931],
        [55.711877433035646, 37.83773271264572],
        [55.72040485137244, 37.839449326415235],
        [55.766498033455285, 37.84288255395432],
        [55.77772254081478, 37.842195908446534],
        [55.82104189324312, 37.838076035399666],
        [55.828772399793955, 37.830522934813764],
        [55.8627683044598, 37.7654632729486],
        [55.87049048282849, 37.750357071776726],
        [55.877825124268625, 37.73525087060485],
        [55.884772448615585, 37.72220460595646],
        [55.893261927290844, 37.70297853173771],
        [55.89480526850497, 37.68649903955022],
        [55.8963485480723, 37.656973282714276],
        [55.901749541109254, 37.61989442529239],
        [55.911006629596315, 37.5876220864252],
        [55.91023529030491, 37.558782975097074],
        [55.90618550624157, 37.53028718652291]
    ];

    // Создание полигона
    polygon = new ymaps.Polygon([polygonCoords], {}, {
        fillColor: '#8A2BE2', // Фиолетовый цвет
        opacity: 0.6, // Прозрачность 60%
        interactivityModel: 'default#transparent',
    });

    // Добавление полигона на карту
    map.geoObjects.add(polygon);

    map.events.add('click', function (e) {
        var coords = e.get('coords');
        if (isPointInsidePolygon(coords, polygonCoords)) {
            getAddress(coords);
        }
    });

    // Обработчик события для формы
    document.getElementById("address-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы по умолчанию

        var address = document.getElementById("address_map").value;
        getCoordinates(address, function(coordinates) {
            if (coordinates && isPointInsidePolygon(coordinates, polygonCoords)) {
                getAddress(coordinates);
            }
        });
    });
}

function getAddress(coords) {
    var latitude = coords[0];
    var longitude = coords[1];

    ymaps.geocode(coords).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        var address = firstGeoObject.getAddressLine();

        document.getElementById("address_map").value = address;
        addMarker(coords);
    });
}

function addMarker(coords) {
    var latitude = coords[0];
    var longitude = coords[1];

    // Удаление предыдущей метки, если она существует
    if (placemark) {
        map.geoObjects.remove(placemark);
    }

    placemark = new ymaps.Placemark([latitude, longitude], {}, { draggable: true });
    map.geoObjects.add(placemark);

    placemark.events.add('dragend', function () {
        updateMarker(placemark);
    });
}

function updateMarker(placemark) {
    var coords = placemark.geometry.getCoordinates();
    var latitude = coords[0];
    var longitude = coords[1];

    console.log('Marker coordinates:', latitude, longitude);
}

// Функция для определения, находится ли точка внутри полигона
function isPointInsidePolygon(point, polygon) {
    var x = point[0], y = point[1];
    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        var xi = polygon[i][0], yi = polygon[i][1];
        var xj = polygon[j][0], yj = polygon[j][1];
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

// Функция для получения координат по адресу
function getCoordinates(address, callback) {
    ymaps.geocode(address).then(
        function (res) {
            var firstGeoObject = res.geoObjects.get(0);
            var coordinates = firstGeoObject.geometry.getCoordinates();
            callback(coordinates);
        },
        function (err) {
            callback(null);
        }
    );
}

// ПЕРЕНОС АДРЕСА В ФОРМУ

const nameForm = document.getElementById('name_form');
const addressMap = document.getElementById('address_map');
const submitAddress = document.getElementById('submit_address');

submitAddress.addEventListener('click', () => {
  nameForm.textContent = addressMap.value;
});

// МОДАЛЬНОЕ ОКНО С ВРЕМЕНЕМ ДОСТАВКИ

var modal2 = document.getElementById("delivery_time_modal");
var close_btn21 = document.getElementById("close_pop_del");
var close_btn22 = document.getElementById("submit_delivery_time");
var open_btn2 = document.getElementById("edit_time_button_pl");

const buttons_time_delivery = document.querySelectorAll('#time_table_btn1, #time_table_btn2, #time_table_btn3, #time_table_btn4, #time_table_btn5, #time_table_btn6, #time_table_btn7, #time_table_btn8, #time_table_btn9, #time_table_btn10');
buttons_time_delivery.forEach(button => {
  button.addEventListener('click', () => {
      buttons_time_delivery.forEach(btn => {
          btn.classList.remove('active_border_time_del');
      });
      button.classList.add('active_border_time_del');
  });
});

open_btn2.addEventListener("click", function(event) {
  event.preventDefault();
  buttons_time_delivery[0].classList.add('active_border_time_del');
  modal2.style.display = "block";
});


close_btn21.onclick = function() {
  buttons_time_delivery.forEach(btn => {
    btn.classList.remove('active_border_time_del');
  });
  modal2.style.display = "none";
}

close_btn22.onclick = function() {
  var curTime;
  // ПЕРЕНОС ВРЕМЕНИ ДОСТАВКИ В ФОРМУ
  for (let i = 0; i < buttons_time_delivery.length; i++) {
    if (buttons_time_delivery[i].classList.contains("active_border_time_del")) {
      curTime = buttons_time_delivery[i].id;
      break;
    }
  }
  document.getElementById("time_form_pl").value = document.getElementById(curTime).textContent;
  // КОНЕЦ ПЕРЕНОСА
  buttons_time_delivery.forEach(btn => {
    btn.classList.remove('active_border_time_del');
  });
  modal2.style.display = "none";
}

