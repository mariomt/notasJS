const MAYORIA_DE_EDAD = 18;
var persona1 = {
  nombre: 'Mario',
  edad: 23
}

var persona2 = {
  nombre: 'Alejandra',
  edad: 13
}

// js nos permite almacenar funciones dentro de variables
// la función es una función anónima

// var esMayorDeEdad = function ({ edad }){
//   return edad >= MAYORIA_DE_EDAD;
// }

// cuando tienen un solo parametro se puede omitir los parentesis
// const esMayorDeEdad = persona => {
//   return edad >= MAYORIA_DE_EDAD;
// }

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
  esMayorDeEdad(persona) ? console.log(`${persona.nombre} es Mayor de edad`) : console.log(`${persona.nombre} es Menor de edad`);
}

function permitirAcceso(persona) {
  if(esMenorDeEdad(persona)) {
    console.log('ACCESO DENEGADO');
  }
}

// reto denegacion de mayor de edad con arrow functions
// solución

const esMenorDeEdad = persona => !esMayorDeEdad(persona); 