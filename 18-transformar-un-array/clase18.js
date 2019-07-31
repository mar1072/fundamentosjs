var vicky = {
  nombre: " Vicky",
  apellido: "Zapata",
  altura: 1.56
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76
};

var dario = {
  nombre: "Dario",
  apellido: "sandoval",
  altura: 1.87
};

var martin = {
  nombre: "Martin",
  apellido: "osorio",
  altura: 1.54
};

var alan = {
  nombre: "Alan",
  apellido: "Serrano",
  altura: 1.68
};

var mario = {
  nombre: "Mario",
  apellido: "Fernandez",
  altura: 1.87
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
    altura: persona.altura *100
  })

var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);
