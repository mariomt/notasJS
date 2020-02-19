// Forman parte de los principios de la programación funcional y nos permite evitar tener efectos colaterales en los datos.

const persona1 = {
    nombre: 'Mario',
    apellido: 'Murillo',
    edad: 236
}


// const cumpleanos = persona => persona.edad ++;


const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad +1
})