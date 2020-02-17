var x = 4, y = '4';

// = asignación
// == comparación (no importa el tipo de dato)
// === comparación (importa el tipo de dato)
// siempre es recomendable utilizar el triple igual


function compararDobleIgual() {
  if(x==y) {
    console.log('igual');
  }else {
    console.log('diferente');
  }
}

function compararTripleIgual() {
  if(x===y) {
    console.log('igual');
  }else {
    console.log('diferente');
  }
}


// -------------------------
// Comparación de objetos
// -------------------------
var persona1 = {
  nombre: 'Mario',
  apellido: 'Murillo',
  edad: 23
}, persona2 = {
  nombre: 'Mario',
  apellido: 'Murillo',
  edad: 23
}


// siempre nos arrojara false ya que no son el mismo objeto en memoria.


// pero si hacemos lo siguiente tenemos que si serán iguales ya que si apuntan al mismo objeto

var persona3 = {
  nombre: 'José',
  apellido: 'Munguia',
  edad: 22
}, persona4 = persona3;

// una comparación en tre los dos de arriba nos arrojará un true ya que si apuntan al mismo objeto
// osea que si modificamos un objeto estaremos modificando el otro.




// si creamos un objeto literal con una persona seguira siendo diferente
var persona5 = {
  nombre: 'Alberto',
  apellido: 'Ramirez'
}, persona6 = {
  ...persona5
}
