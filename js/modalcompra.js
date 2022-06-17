/*Modal*/
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

const openfail = document.getElementById('openfail');
const modal_container_fail = document.getElementById('modal_container_fail');
const closefail = document.getElementById('closefail');

function validarCamposVacios(event) {
    var elements = document.getElementById("myform").elements;
    var flag = true;

    for (var i = 0, element; element = elements[i++];) {
        if ((element.type === "text" && element.value === "") || (element.type === "tel" && element.value === "") || (element.type === "number" && element.value === "") || (element.type === "textarea" && element.value === "") || (element.type === "email" && element.value === "") || (element.type === "date" && element.value === "")) {
            flag = false;
            event.preventDefault();
            document.getElementsByClassName("MensajeValidacion")[0].style.display = "block";
            break;
        }
    }

    return flag;
}

open.addEventListener('click', () => {
    if(validarCamposVacios(event)===false){
        return;
    }
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