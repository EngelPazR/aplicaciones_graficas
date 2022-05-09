var imagenes = ['../img/2.jpg','../img/4318317.jpg','../img/d49e86e1bfbb3a3bc4964f3ef56ba7ad.jpg','../img/panama-hats.jpg','../img/pexels-photo-996329.webp'],
cont = 0;

function carrousel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('.banner'),
        tgt = e.target;


        if(tgt== atras){
            if(cont>0){
                img.src = imagenes[cont-1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length-1];
                cont = imagenes.length-1;
            }
        }else if(tgt== adelante){
            if(cont<imagenes.length-1){
                img.src = imagenes[cont+1];
                cont++;
            }else{
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let contenedor = document.querySelector('.carrousel');

    carrousel(contenedor);
});