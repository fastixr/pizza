const inputField_name_lk = document.getElementById('name_form_lk');
const editButton_name_lk = document.getElementById('edit_name_button_lk');

editButton_name_lk.addEventListener('click', function(event) {
    event.preventDefault();
  if (editButton_name_lk.textContent === 'Изменить') {
    event.stopPropagation();
    inputField_name_lk.disabled = false;
    editButton_name_lk.textContent = 'Сохранить';
  } else {
    document.forms[0].submit()
    inputField_name_lk.disabled = true;
    editButton_name_lk.textContent = 'Изменить';
  }
});

const inputField_date_lk = document.getElementById('date_form_lk');
const editButton_date_lk = document.getElementById('edit_date_button_lk');

editButton_date_lk.addEventListener('click', function(event) {
    event.preventDefault();
  if (editButton_date_lk.textContent === 'Изменить') {
    event.stopPropagation();
    inputField_date_lk.disabled = false;
    editButton_date_lk.textContent = 'Сохранить';
  } else {
    document.forms[2].submit()
    inputField_date_lk.disabled = true;
    editButton_date_lk.textContent = 'Изменить';
  }
});

const inputField_card_lk = document.getElementById('card_form_lk');
const inputField_card_date_lk = document.getElementById('card_date_form_lk');
const inputField_card_cvc_lk = document.getElementById('card_cvc_form_lk');
const editButton_card_lk = document.getElementById('edit_card_button_lk');

editButton_card_lk.addEventListener('click', function(event) {
    event.preventDefault();
  if (editButton_card_lk.textContent === 'Изменить') {
    event.stopPropagation();
    inputField_card_lk.disabled = false;
    inputField_card_date_lk.disabled = false;
    inputField_card_cvc_lk.disabled = false;
    editButton_card_lk.textContent = 'Сохранить';
  } else {
    inputField_card_lk.disabled = true;
    inputField_card_date_lk.disabled = true;
    inputField_card_cvc_lk.disabled = true;
    editButton_card_lk.textContent = 'Изменить';
  }
});

const password_change_lk = document.getElementById('password_change_lk');
const password_change_lk_1 = document.getElementById('password_change_lk_1');
const password_change_lk_2 = document.getElementById('password_change_lk_2');
const edit_password_button_lk = document.getElementById('edit_password_button_lk');

edit_password_button_lk.addEventListener('click', function(event) {
    event.preventDefault();
  if (edit_password_button_lk.textContent === 'Изменить') {
    event.stopPropagation();
    password_change_lk.disabled = false;
    password_change_lk_1.disabled = false;
    password_change_lk_2.disabled = false;
    edit_password_button_lk.textContent = 'Сохранить';
  } else {
    password_change_lk.disabled = true;
    password_change_lk_1.disabled = true;
    password_change_lk_2.disabled = true;
    edit_password_button_lk.textContent = 'Изменить';
  }
});