const API_URL = 'https://swapi.co/api/'; // Para llamar al API
const PEOPLE_URL = 'people/:id'; // Parte ede  la url para buscar personajes

// Request con jquery
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true }
const onResponse = function (persona) {
    // todas las funciones tienen la siguente variable donde nos indica los parametros que recibe la función
    // console.log(arguments); 
    console.log(`Hola yo soy ${persona.name}`);
}

$.get(lukeUrl, opts, onResponse);