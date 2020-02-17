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


// podemos agrupar a estas personas en un arreglo
var personas = [vicky,paula,martin,dario];

// si queremos acceder al primero...
// personas[0]

// si queremos acceder a su altura...
//personas[0].altura  ó
//personas[0]['altura']

// para recorrer un arreglo ...

for (var i=0; i < personas.length; i++) {
  console.log(`${personas[i].nombre} mide ${personas[i].altura}mts`)
}

