console.log("Entro index.js");


function saludar(texto, callback) {
    //console.log ("Entro a la funcion saludar");
    const textoMayusculas = texto.toUpperCase();
    callback("Hola: ", textoMayusculas);
    //console.log(textoMayusculas);
}
function imprimir(parametro){
    console.log(parametro);
}

saludar("Daniel", imprimir);