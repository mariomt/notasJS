var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 132
}

var martin = {
    nombre: 'Martin',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 111
}

var dario = {
    nombre: 'Dario',
    apellido: 'Gomez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var personas = [vicky,paula,martin,dario];

// PRIMER MANERA
// var acum = 0;

// for (var i =0; i < personas.length;i++) {
//     acum += personas[i].cantidadDeLibros;
// }


// SEGUNDA MANERA
// const reducer = (acum,persona) => {
//     return acum + persona.cantidadDeLibros
// }
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

var totalLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalLibros} libros`)