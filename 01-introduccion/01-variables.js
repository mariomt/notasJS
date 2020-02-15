
// Mostrar datos por consola
console.log('Hola mundo desde javaScript');

//variables
var nombre;

/*los strings en javascript son 
indistintos, osea que no importa
si es con comilla simple o doble*/
nombre='Mario'; 

// variable en una línea
var apellido = 'Murillo';


// declarando multiples variables
// var nombre='mario', apellido='murillo'

console.log('Hola soy ' + nombre + ' ' +apellido);

/* Problema o ventaja de que las variables son debilmente tipado */
var edad= 28;
edad= '23 años';
console.log('Tengo '+edad + ' de edad');