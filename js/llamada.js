function videollamada() {
    var llamada = document.getElementById('llamada');
    var buttoncerrar = document.getElementById('cerrarllamada');
    var capturar = document.getElementById('capturar');
    /*webcam*/
    llamada.style.display = "block";
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getUserMedia({ video: true }, function (stream) {
        llamada.srcObject = stream;
        llamada.play();
        buttoncerrar.style.display = "block";
        capturar.style.display = "block";
    }, function (error) {
        alert('No se pudo acceder a la camara');
    });
}

function terminarllamada() {
    var llamada = document.getElementById('llamada');
    var buttoncerrar = document.getElementById('cerrarllamada');
    var capturar = document.getElementById('capturar');
    llamada.srcObject.getTracks().forEach(function (track) {
        track.stop();
        buttoncerrar.style.display = "none";
        capturar.style.display = "none";
    });
    llamada.style.display = "none";
}

function CapturarImagenVideo() {
    var llamada = document.getElementById('llamada');
    llamada.pause();
    llamada.srcObject.getTracks().forEach(function (track) {
        track.stop();
    });
}

const openllamada = document.getElementById('openllamada');
const modal_containerllamada = document.getElementById('modal_container_llamada');
const closellamada = document.getElementById('closellamada');

openllamada.addEventListener('click', () => {
    modal_containerllamada.classList.add('show');

});

closellamada.addEventListener('click', () => {
    modal_containerllamada.classList.remove('show');

});
