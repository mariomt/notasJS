// esta condicional ejecuta al menos una vez el código

// cuantas veces ves llover.

var contador = 0;

const llueve = () => Math.random() <0.25

do {
  contador ++;
} while (!llueve());

// console.log(`Fui a ver si llovía ${contador} veces`);

//reto

if(contador>1) {
  console.log(`Fui a ver si llovía ${contador} veces`);
} else {
  console.log(`Fui a ver si llovía ${contador} vez`);
}