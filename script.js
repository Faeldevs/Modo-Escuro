const botao = document.querySelector('#toggle');
const body = document.querySelector('body');


botao.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});


