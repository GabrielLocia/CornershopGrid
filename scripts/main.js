'use strict';

/** 
 * TODO1. Función que agregue un delay cada 0.5s.
 * TODO2. Función que seleccione la imagen y la cambie de acuerdo a cada contador.
 * TODO3. Integración de script en Página.
 **/

// Funcion que devuelve una promesa con un tiempo de espera de 0.5s
function timeOut(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num);
        }, 600);
    });
}

// Función tipo asincrona para llamar a timeOut
// dentro de un ciclo que es igual al numero de imágenes.
async function animacion() {
    console.log('Llamado de animacion');
    for (let index = 0; index < 6; index++) {
        const result = await timeOut(index);
        console.log(result);
    }
    //Reinicio de función haciendo un ciclo infinito.   
    animacion();
}

//Iniciado de función animación cuando se carga la página.
animacion();
