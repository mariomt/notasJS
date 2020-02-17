var persona1 = {
  nombre: 'Mario',
  apellido: 'Murillo',
  edad: 23,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  guitarrista: true
}

// definir funcion que nos diga las profesiones de una persona

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  // condicional if
  if (persona.ingeniero) {
    console.log('ingeniero');
  } else {
    console.log('no es ingeniero');
  }

  if (persona.cocinero) {
    console.log('cocinero');
  }

  if (persona.cantante) {
    console.log('cantante');
  }

  if (persona.guitarrista) {
    console.log('guitarrista');
  }
}


// reto...

function esMayorDeEdad(persona) {
  // si la persona tiene 18 o más que imprima...
  // Nombre es Mayor de edad
  // en caso de no serlo que imprima...
  // Nombre es Menor de edad
}
