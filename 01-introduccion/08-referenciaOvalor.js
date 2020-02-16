var persona1 = {
  nombre: 'Mario',
  apellido: 'Murillo',
  edad: 23
}

// Esta función incrementará la edad del objeto,
// los cambios serán visibles despues de realizarlos.
function incrementaEdad1(persona) {
  persona.edad += 1; // efecto colateral (side effect)
}


// normalmente en javascript para evitar eso se realizan funciones donde
// se retorne un objeto nuevo con los campos modificados.
function incrementaEdad2(persona) {
  return {
    ...persona, // saca las propiedades del objeto y las coloca en el nuevo objeto
    edad: persona.edad +1 // creamos un nuevo valor para la propiedad edad (lo remplazamos)
  }
}



