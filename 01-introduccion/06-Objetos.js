// var nombreMario = 'Mario';
// var apellidoMario = 'Murillo';
// var edadMario = 23;
// var nombreAlejandra = 'Alejandra';
// var apellidoAlejandra = 'Ozuna';
// var edadAlejandra = 28;

var persona1 = {
  nombre: 'Mario',
  apellido: 'Murillo',
  edad: 23
}

var persona2 = {
  nombre: 'Alejandra',
  apellido: 'Ozuna',
  edad: 28
}

// function imprimirNombreEnMayusculas(persona) {
//   console.log(persona.nombre.toUpperCase() + ' ' + persona.apellido.toUpperCase());
// }



// ahora utilicemos el destructuring
function imprimirNombreEnMayusculas({ nombre, apellido }) {
  console.log(nombre.toUpperCase(), apellido.toUpperCase());
}

imprimirNombreEnMayusculas(persona1);
imprimirNombreEnMayusculas(persona2);
imprimirNombreEnMayusculas({ nombre: 'José', apellido: 'Munguia' }); // objeto anónimo



//si mandamos sin parametros, javascript nos arrojará un error por que la 
//función estará esperando que le este enviando un obejo con los campos colocados.

// imprimirNombreEnMayusculas(); 