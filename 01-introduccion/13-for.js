var persona = {
  nombre: 'Mario',
  apellido: 'Murillo',
  edad: 23,
  peso: 65 // propiedad importante para el ejemplo
}

console.log(`Al inicio del año ${persona.nombre} pesaba ${persona.peso}kg`);


const CAMBIO_EN_PESO = 0.200;
const DIAS_DEL_ANO = 365;

// const aumentarPeso = persona => persona.peso += 200; cuando tiene un numero asi nomas se le conoce como magic number
const aumentarPeso = persona => persona.peso += CAMBIO_EN_PESO;
const adelgazar = persona => persona.peso -= CAMBIO_EN_PESO;

for (var i=1; i<=DIAS_DEL_ANO; i++) {
  var random = Math.random(); //Math devuelve entre 0 y 1

  if(random < 0.25) {
    // aumenta de peso
    aumentarPeso(persona);
  } else if (random < 0.5) {
    // adelgazar
    adelgazar(persona);
  }
}

console.log(`Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(2)}kg`);