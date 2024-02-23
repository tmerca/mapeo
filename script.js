let imagen = document.querySelector('body > img:nth-child(2)');

imagen.addEventListener("click", function(e) {

    let objCoordenadas = obtenCoordenadas(e);

    console.log("hola");

    console.log(objCoordenadas.x);
    console.log(objCoordenadas.y);

})

function obtenCoordenadas(evento) {
    return {
        x: evento.clientX,
        y: evento.clientY,
    }    
} 