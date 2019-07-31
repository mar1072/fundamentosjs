var vicky = {
  nombre: " Vicky",
  apellido: "Zapata",
  altura: 1.56,
  cantidadDeLibros: 199
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
  cantidadDeLibros: 149
};

var dario = {
  nombre: "Dario",
  apellido: "sandoval",
  altura: 1.87,
  cantidadDeLibros: 179
};

var martin = {
  nombre: "Martin",
  apellido: "osorio",
  altura: 1.54,
  cantidadDeLibros: 143
};

var alan = {
  nombre: "Alan",
  apellido: "Serrano",
  altura: 1.68,
  cantidadDeLibros: 519
};

var mario = {
  nombre: "Mario",
  apellido: "Fernandez",
  altura: 1.87,
  cantidadDeLibros: 249
};

const esAlta = ({ altura }) => altura > 1.8;

var personas = [mario, alan, martin, dario, vicky, paula];

// for (var i = 0; i < personas.length; i++) {
//   var persona = personas[i];
//   console.log(`${persona.nombre} mide ${persona.altura}mts`);
// }

var personasAltas = personas.filter(esAlta);

const pasarAlturaACms = persona => ({
  // persona.altura = persona.altura *100
  // persona.altura *= 100
  ...persona,
  altura: persona.altura * 100
});

var personasCms = personas.map(pasarAlturaACms);

// var acum = 0

// for (let i = 0; i < personas.length; i++) {
//   var acum = acum + personas[i].cantidadDeLibros
// }

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);

console.log(personasCms);
