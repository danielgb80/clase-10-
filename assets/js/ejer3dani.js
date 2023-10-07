console.log("Entro ejer3dani.js");

const miPrimerPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve("La operación de promesa finalizó correctamente");
        } else {
            reject("La promesa fue rechazada o no se cumplio ")
        }
    }, 2000);
});

//Manejar promesas .then() .catch() .finaly()

miPrimerPromesa
    .then((resultado) => {
        console.log("Entro al then");
        console.log(resultado);
    })

    .catch((error) => {
        console.warn("Entro a catch");
        console.error(error);
    })
    .finally(()=>{
        console.log("Entro a finaly");
        loading.style.display = "none";
    })

console.log("Este console log es sincrono");
