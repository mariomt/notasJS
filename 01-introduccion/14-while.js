// la persona debe bajar de peso y queremos saber cuanto tardo.

var persona1 = {
  nombre: 'Mario',
  apellido: 'Murillo',
  edad: 23,
  peso: 65
}

console.log(`Al inicio del año ${persona1.nombre} pesaba ${persona1.peso}kg`);


const CAMBIO_EN_PESO = 0.2;
const DIAS_DEL_ANO = 365;
const META_DE_PESO = persona1.peso-3;

const aumentarPeso = persona => persona.peso += CAMBIO_EN_PESO;
const adelgazar = persona => persona.peso -= CAMBIO_EN_PESO;
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

var dias = 0;
while (persona1.peso > META_DE_PESO) {
  if (comeMucho()) {
    // aumenta peso
    aumentarPeso(persona1);
  } 
  if (realizaDeporte()) {
    // baja de peso
    adelgazar(persona1);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${persona1.nombre} adelgazó hasta la meta`);