class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}  `);
  }

  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y soy desarrollador`);
  }
}

var mario = new Persona("Mario", "Fernandez", 1.72);
var ronald = new Persona("Ronald", "Fernandez", 1.68);
var miguel = new Persona("Miguel", "Fernandez", 1.84);
// var pechi = new Desarrollador ("Pechi", "Gonzales" , 1.79);

mario.soyAlto();
ronald.soyAlto();
miguel.soyAlto();
