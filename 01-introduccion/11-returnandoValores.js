var persona1= {
  nombre: 'Mario',
  apellido: 'Murillo',
  edad: 23
}

var persona2 = {
  nombre: 'Alejandra',
  apellido: 'Ozuna',
  edad: 16
}


// ejemplo 1
// function imprimirSiEsMayorDeEdad(persona) {
//   if(persona.edad >= 18) {
//     console.log(`${persona.nombre} es Mayor de edad`);
//   } else {
//     console.log(`${persona.nombre} es Menor de edad`);
//   }
// }


// ejemplo2 mejorado

// function esMayorDeEdad({ edad }) {
//   return edad>=18; // magic number al numero que aparece asi nomas
// }

// function imprimirSiEsMayorDeEdad(persona) {
//   if(esMayorDeEdad(persona)) {
//     console.log(`${persona.nombre} es Mayor de edad`);
//   } else {
//     console.log(`${persona.nombre} es Menor de edad`);
//   }
// }


// ejemplo3 Mejorado
const MAYORIA_DE_EDAD = 18; // Las constantes por convencion se escriben en mayúsculas

function esMayorDeEdad({ edad }) {
  return edad>=MAYORIA_DE_EDAD;
}

// function imprimirSiEsMayorDeEdad(persona) {
//   if(esMayorDeEdad(persona)) {
//     console.log(`${persona.nombre} es Mayor de edad`);
//   } else {
//     console.log(`${persona.nombre} es Menor de edad`);
//   }
// }

//if ternario
function imprimirSiEsMayorDeEdad(persona) {
  esMayorDeEdad(persona1) ? console.log(`${persona.nombre} es Mayor de edad`) : console.log(`${persona.nombre} es Menor de edad`);
}

imprimirSiEsMayorDeEdad(persona1);
imprimirSiEsMayorDeEdad(persona2);