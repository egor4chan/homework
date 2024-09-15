let button = document.getElementById('js');
let interest = document.getElementById('interest');


button.addEventListener('click', () => {
    var x = prompt('Введи координату X');
    var y = prompt('Введи координату Y');

    if ((x*x + y*y) <= 1) {
        alert('Вы попали в мишень!')
    }
    else {
        alert('Не попал ты, дружище...')
    }
})

interest.addEventListener('click', () => {
    interest.innerHTML = 'Не очень интересная'
})