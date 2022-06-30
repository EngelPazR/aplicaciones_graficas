/*Modal*/
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

const opencodigo = document.getElementById('opencodigo');
const modal_container_codigo = document.getElementById('modal_container_codigo');
const closeModal = document.getElementById('closeModal');


const openchange = document.getElementById('openchange');
const modal_container_change = document.getElementById('modal_container_change');
const closeModalC = document.getElementById('closeModalcodigo');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
    disableScrolling();
});

close.addEventListener('click', () => {
    modal_container_change.classList.remove('show');
    enableScrolling();
});

closeModal.addEventListener('click', () => {
    modal_container.classList.remove('show');
    enableScrolling();
});

closeModalC.addEventListener('click', () => {
    modal_container_codigo.classList.remove('show');
    enableScrolling();
});


function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
}

function enableScrolling() {
    window.onscroll = function () { };
}

opencodigo.addEventListener('click', () => {
    modal_container.classList.remove('show');
    modal_container_codigo.classList.add('show');
    disableScrolling();
});


openchange.addEventListener('click', () => {
    modal_container_codigo.classList.remove('show');
    modal_container_change.classList.add('show');
    disableScrolling();
});

