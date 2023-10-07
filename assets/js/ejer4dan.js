console.log("Entro ejer4dan.js");

//servidor...
function cargarDatos(status, fuente){
    return new Promise((resolve, reject)=>{
        if (status == "ok") {
            resolve(`Datos cargados correctamente desde ${fuente}`);
        } else{
            reject(`Datos no disponibles en ${fuente}`);
        }
    });
}

/*mandar a llamar la promesa 2 ocaciones
1. Con promesa resuelta
2. Con promesa fallida
3. Usar la fuente de datos https//fuente.de.los.deseos.com
*/

//Cliente...
cargarDatos("ok", "http://fuente.de.los.deseos.com")
    .then((data) => {
        console.log(data);
        console.log("resolvio promesa 1");
    })
    .catch((error) => {
        console.error("fallo error promesa 1");
    });



    cargarDatos("error", "http://fuente.wikipedia.com")
    .then((data)=>{
        console.log("resolvio promesa 2");
    })
    .catch((error)=>{
        console.error(error);
        console.error("fallo error promesa 2");
    })
