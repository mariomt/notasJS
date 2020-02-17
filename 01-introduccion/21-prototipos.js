// En esta clase haremos el protitipo de persona la cual solo podrá
// saludar, decir su nombre y su apellido.

function PersonaPrueba() {
    console.log('Me ejecutaron');
}

// Sin la palabra new la variable mario nos devolverá undefined
// la palabra new lo que hace es crear un nuevo objeto como lo conocemos hasta ahora
// y a ese objeto se le asignará como prototipo la funcion persona.
var mario = new PersonaPrueba();



// ----------------------------------
// Prototipo
// ----------------------------------

function Persona( nombre, apellido,altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura; //parte del reto
    return this; // se hace implicitamente (se puede omitir)
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

var persona1 = new Persona('Mario','Murillo',1.68);

persona1.saludar();


// reto ...
// Agregarle a la persona el atributo de altura y que cada persona diga si es alto o no.

Persona.prototype.soyAlto = function () {
    if (this.altura > 1.7) {
        console.log(`Soy ${this.nombre} y soy alto`);
    }else {
        console.log(`Soy ${this.nombre} y soy bajito`);
    }
}



