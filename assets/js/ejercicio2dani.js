console.log("Entro ejercicio2dani.js");

let loading = document.getElementById("loading");


function saludar(texto, callback) {
    //console.log ("Entro a la funcion saludar");
    const textoMayusculas = texto.toUpperCase();
    setTimeout(() => {
        callback("hola: " + textoMayusculas);
    }, 4000);
    //console.log(textoMayusculas);
}
function imprimir(parametro) {
    console.log(parametro);
    console.log("Final");
    //loading.style.display = "none";
    
}


saludar("Daniel", imprimir);
//setTimeout(()=>{