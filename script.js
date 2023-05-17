const cards = document.querySelector('.ag-format-container');
const myButton = document.querySelector('.zorar');
cards.classList.add('hidden');


const show = function() {
    if (cards.classList.contains('hidden')) cards.classList.remove('hidden');
    else cards.classList.add('hidden');
}

myButton.addEventListener('click', show);