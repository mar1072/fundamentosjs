function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}  `);
};

Persona.prototype.soyAlto = () => this.altura > 1.8

var mario = new Persona("Mario", "Fernandez", 1.72);
var ronald = new Persona("Ronald", "Fernandez", 1.68);
var miguel = new Persona("Miguel", "Fernandez", 1.84);


mario.soyAlto() 
ronald.soyAlto()
miguel.soyAlto()


