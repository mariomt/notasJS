// Función map

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

const esAlta = ({ altura }) => altura > 1.8;


var personasAltas = personas.filter(esAlta);


// Para poder retornar un objeto sin el return es necesario iniciar el 
// cuerpo del arrow function con ( y finalizarlo con ) y en su interior colocar
// el objeto a returnar, como se muestra acontinuación
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
});


// const pasarAlturaACms = persona => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }

// MAPEO de arreglo
var personasCms =personas.map(pasarAlturaACms);


console.log(personasCms);

