
class Persona {
  constructor( nombre, apellido,altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura; //parte del reto
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
  }

  soyAlto() {
    return this.altura > 1.8;
  }
}


class Desarrollador extends Persona {
  constructor(nombre,apellido,altura){
    super(nombre,apellido,altura);
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
  }
}




// var persona1 = new Persona('Mario','Murillo', 1.6);
// var persona2 = new Persona('Alejandra','Ozuna', 1.81);





