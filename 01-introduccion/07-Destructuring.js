var persona1 = {
  nombre: 'Mario',
  apellido: 'Murillo',
  edad: 23
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre;
  var { nombre } = persona; // destructuring
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(persona1);

// Reto...
function imprimirNombreEdad(){
  // imprimir: Hola, me llamo tu_nombre y tengo tu_edad años.
  // imprimir: Hola, me llamo mi_nombre y tengo mi_edad años.
}