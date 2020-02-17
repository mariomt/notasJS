// Herencia prototipal
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona( nombre, apellido,altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura; //parte del reto
    return this; // se hace implicitamente (se puede omitir)
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}


// Crearemos un prototipo que herede de otro.
function Desarrollador(nombre,apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador,Persona);// debe ir antes de las funciones que se van a cambiar

Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}


// var persona1 = new Persona('Mario','Murillo', 1.6);
// var persona2 = new Persona('Alejandra','Ozuna', 1.81);





