var nombre = 'Mario', apellido='Murillo';

//tranformar a mayusculas.
var nombreEnMayusculas = nombre.toUpperCase();

// transformar a minusculas.
var apellidoEnMinusculas = apellido.toLowerCase();

// extraer la primer letra del nombre
var primerLetra = nombre.charAt(0);

// cantidad de letras del nombre
var cantidadDeLetras= nombre.length;

// Interpolación de strings
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

// substraer del nombre segundo y tercer caracter
// var str = nombre.substr(desde,cuantos_caracteres);
var str = nombre.substr(1,2);
