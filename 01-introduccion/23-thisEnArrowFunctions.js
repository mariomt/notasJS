function Persona( nombre, apellido,altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura; //parte del reto
    return this; // se hace implicitamente (se puede omitir)
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}


// No da el mismo funcionamiento ya que this es referente al contexto global (window)
// Persona.prototype.soyAlto = ()  => {
//     // debugger;
//     this.altura >1.8; 
// }

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}



var persona1 = new Persona('Mario','Murillo', 1.6);
var persona2 = new Persona('Alejandra','Ozuna', 1.81);



persona1.saludar();