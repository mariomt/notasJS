
class Persona {
  constructor( nombre, apellido,altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura; //parte del reto
  }

  saludar(fn) {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    if (fn) {
      fn(this.nombre,this.apellido);
    }
  }

  soyAlto() {
    return this.altura > 1.8;
  }
}


class Desarrollador extends Persona {
  constructor(nombre,apellido,altura){
    super(nombre,apellido,altura);
  }

  saludar(fn) {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    if (fn) {
      fn(this.nombre,this.apellido,true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log('ah mira, no sabía que eras desarrollador');
  }
}



var persona1 = new Persona('Mario','Murillo', 1.62);
var persona2 = new Persona('Alejandra','Ozuna',1.71);
var persona3 = new Desarrollador('Jesus', 'Othon',1.62);

persona1.saludar();
persona2.saludar(responderSaludo);
persona3.saludar(responderSaludo);