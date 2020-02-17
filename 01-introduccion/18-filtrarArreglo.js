var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

var martin = {
  nombre: 'Martin',
  apellido: 'Juarez',
  altura: 1.71
}

var dario = {
  nombre: 'Dario',
  apellido: 'Gomez',
  altura: 1.86
}

var personas = [vicky,paula,martin,dario];

// const esAlta = persona => persona.altura > 1.8
const esAlta = ({ altura }) => altura > 1.8;

// filtrar a las personas altas.
// para filtrar necesitamos dos cosas array y condición

var personasAltas = personas.filter(esAlta);
// es igual a...
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8;
// });

console.log(personasAltas);

// reto...
// con lo que tenemos hacer el filtrado de las personas bajas.
