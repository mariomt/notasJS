
// se ejecutan en el orden en que se encuentran
// console.log('a');
// console.log('b');
// console.log('c');

// Cómo ejecuta las tareas asincronas javascript?
// console.log('a');
// setTimeout(function (){ 
//     console.log('b');
// }, 2000)
// console.log('c');


// tercer ejemplo 

setTimeout(() => console.log('d'),2000);
for(var i=0; i < 100000; i++) {
    console.log('a');
}
