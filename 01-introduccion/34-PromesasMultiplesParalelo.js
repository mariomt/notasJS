const API_URL = 'https://swapi.co/api/'; 
const PEOPLE_URL = 'people/:id'; 

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true }


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opts, function (data) {
            resolve(data)
        })
        .fail(() => reject(id));
    })
}

function onError(id) {
    console.log(`Sucedió un error al objeter al personaje ${id}`)
}

var ids = [1,2,3,4,5,6,7];

// var primises = ids.map(function (id) {
//   return obtenerPersonaje(id);
// })
var promises = ids.map(id => obtenerPersonaje(id));

Promise.all(promises).then(personajes => console.log(personajes)).catch(onerror)
