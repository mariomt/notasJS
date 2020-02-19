var persona1 = {
    nombre: 'sacha',
    apellido: 'Lifszyc',
    edad: 28
}

function esMayorDeEdad(persona) {
    if(persona.edad > 18) {
        var mensaje = 'Es mayor de edad';
    } else {
        var mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
}



esMayorDeEdad(persona1);