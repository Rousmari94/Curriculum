function mostrar() {
    var div = document.querySelector('.texto1');
    div.style.display = (div.style.display === 'none' || div.style.display === '') ? 'block' : 'none';

    
}

function mostrarTexto2() {
    var div = document.querySelector('.texto2');
    div.style.display = (div.style.display === 'none' || div.style.display === '') ? 'block' : 'none';
}

function mostrarTexto3() {
    var div = document.querySelector('.texto3');
    div.style.display = (div.style.display === 'none' || div.style.display === '') ? 'block' : 'none';
}

function mostrarTexto(clase) {
    var div = document.querySelector(`.${clase}`);
    div.style.display = (div.style.display === 'none' || div.style.display === '') ? 'block' : 'none';
}