var nombre = 'Mario'; // variable global (objeto window del navegador)

// function imprimeNombreEnMayusculas() {
//   // efecto colateral (side effect)
//   // cuando no encuentra la variable en el ambito local lo busca en el global
//   nombre = nombre.toUpperCase(); 
//   console.log(nombre);
// }

function imprimeNombreEnMayusculas(nombre) {
  // nombre solo existe en este contexto
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

imprimeNombreEnMayusculas(nombre);

// nombre ahora es => MARIO