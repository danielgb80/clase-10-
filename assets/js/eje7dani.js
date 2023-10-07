console.log("Entro eje7dani.js");

Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      //Porqué no me aparece un icono "x" para la acción cancelada, o cómo lo puedo agregar
    }else{
        Swal.fire(
            "Mensaje",
            "Acción cancelada",
            "Error",
        )
    }
  })