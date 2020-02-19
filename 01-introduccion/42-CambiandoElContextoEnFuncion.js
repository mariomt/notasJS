const persona1 = {
    nombre: 'Mario',
    apellido: 'Murillo'
}

function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}


// lo que hace el bind es regresar una funcion diferente con el contexto cambiado
//const saludarAPersona1 = saludar.bind(persona1); 

// setTimeout(saludar.bind(persona1,'Hola che'),1000);

// si hacemos lo siguiente no se ejecutará nada ya que solo nos regresa la referencia a la funcion
// mas no se ejecuta.
// saludar.bind(persona1,'Hola che');


// si queremos ejecutar una función cambiando su contexto es necesario usar la función call
saludar.call(persona1,'Hola Che');
saludar.apply(persona1, ['Hola che']); // la diferencia es como se mandan los parametros, aquí se envían en un arreglo



