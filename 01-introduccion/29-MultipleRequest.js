const API_URL = 'https://swapi.co/api/'; // Para llamar al API
const PEOPLE_URL = 'people/:id'; // Parte ede  la url para buscar personajes

// Request con jquery
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true }
const onResponse = function (persona) {
    // todas las funciones tienen la siguente variable donde nos indica los parametros que recibe la función
    // console.log(arguments); 
    console.log(`Hola, yo soy ${persona.name}`);
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, onResponse);
}

// el orden depende de que tanto tarde el servidor en responder cada una de las peticiones
// nosotros sabemos que hacemos las peticiones en ese orden pero no sabremos como llegarán.
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);