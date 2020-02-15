var nombre = 'Mario', edad= 23;

// function nombre_funcion(){}
function imprimirEdad(nom,ed) {
  //cuerpo de la función
  console.log(`${nom} tiene ${ed} años`);
}

//invocación de función
imprimirEdad(nombre,edad);
imprimirEdad('Gilberto',24);
imprimirEdad(25,'Alejandra');// tener encuenta que a javascript no le importa el tipo de parametos
imprimirEdad(); // tener en cuenta que javascript no arroja error.

