let button = document.getElementById('js');
let interest = document.getElementById('interest');


button.addEventListener('click', () => {
    alert('Да, просто alert()')
})

interest.addEventListener('click', () => {
    interest.innerHTML = 'Не очень интересная'
})