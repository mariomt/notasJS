// Condicional multiple

// prompt() nos permite preguntar y recibir infomración del usuario.
var signo = prompt('¿Cuál es tu signo?'); // si da en cancelar devuelve null

// if( signo === 'acuario' ) {
//   console.log('Oroscopo del día para acuario.');
// }

// if( signo === 'piscis' ) {
//   console.log('Oroscopo del día para piscis.');
// }

// if( signo === 'cancer' ) {
//   console.log('Oroscopo del día para cancer.');
// }

// tener muchos if comparando la misma variable se puede optar por usar el switch

switch (signo) {
  case 'acuario':
    console.log('Oroscopo del día para acuario.');
    break;
  case 'piscis':
    console.log('Oroscopo del día para piscis.');
    break;
  case 'cancer':
  case 'cáncer':
    console.log('Oroscopo del día para cancer.');
    break;
  default:
    console.log('No se encontro el signo zodiacal')
    break;
}


