console.log("Entro eje6dan.js");

//Servidor...
function cargarDatos(status, fuente) {
    return new Promise((resolve, reject) => {
        if (status == "ok") {
            setTimeout(() => {
                resolve(`Datos cargados correctamente desde ${fuente}`);
            }, 2000)
        } else {
            setTimeout(() => {
                reject(`Datos no disponibles en ${fuente}`);
                console.log("promesa fallida");
            }, 4000)
        }
    });
}

const promesa1 = cargarDatos("ok", "http://fuente.de.los.deseos.com");
const promesa2 = cargarDatos("ok", "http://fuente.wikipedia.com");

//funcion anónima (()=>{})
//seccion 1:
(async () => {
    try {
        const respuesta = await promesa1;
        const respuesta2 = await promesa2;
        console.log(respuesta);
        console.log(respuesta2);
    } catch (error) {
        console.error("Fallo algo en el código")
    }
})();

//los siguientes pasos dan el mismo resultado que la sección1 anterior
promesa1
.then((respuesta)=>{
    console.log(respuesta);
})
.catch((error)=>{
    console.error(error);
})
promesa2
.then((respuesta)=>{
    console.log(respuesta);
})
.catch((error)=>{
    console.error(error);
})