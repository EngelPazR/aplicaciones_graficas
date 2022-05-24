/*Modal*/
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

const openfail = document.getElementById('openfail');
const modal_container_fail = document.getElementById('modal_container_fail');
const closefail = document.getElementById('closefail');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
    disableScrolling();
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
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

/*fail */
openfail.addEventListener('click', () => {
    modal_container_fail.classList.add('show');
    disableScrolling();
});

closefail.addEventListener('click', () => {
    modal_container_fail.classList.remove('show');
    enableScrolling();
});