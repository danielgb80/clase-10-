console.log("Entro eje5dan.js");

//Servidor...
function cargarDatos(status, fuente){
    return new Promise((resolve, reject)=>{
        if (status == "ok") {
            resolve(`Datos cargados correctamente desde ${fuente}`);
        } else {
            reject(`Datos no disponibles en ${fuente}`);
        }
    });
}

const promesa1 = cargarDatos("ok", "http://fuente.de.los.deseos.com");
const promesa2 = cargarDatos("ok", "http://fuente.wikipedia.com");

Promise.all([promesa1, promesa2])
.then((data)=>{
    console.log("Resolvió la promesa");
})
.catch((error)=>{
    console.warn("No resolvió la promesa");s
});
    