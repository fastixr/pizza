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