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

const inputField_time_pl = document.getElementById('time_form_pl');
const editButton_time_pl = document.getElementById('edit_time_button_pl');

editButton_time_pl.addEventListener('click', function(event) {
    event.preventDefault();
  if (editButton_time_pl.textContent === 'Изменить') {
    event.stopPropagation();
    inputField_time_pl.disabled = false;
    editButton_time_pl.textContent = 'Сохранить';
  } else {
    inputField_time_pl.disabled = true;
    editButton_time_pl.textContent = 'Изменить';
  }
});

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