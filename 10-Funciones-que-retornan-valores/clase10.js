var mario = {
  nombre: "Mario",
  apellido: "Fernandez",
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  jd: false,
  guitarrista: false
  //   drone: true
};

var ronald = {
  nombre: "Ronald",
  apellido: "Fernandez",
  edad: 16
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero) {
    console.log("ingeniero");
  } else {
    console.log("No es Ingeniero");
  }

  if (persona.cocinero) {
    console.log("Cocinero");
  }
  if (persona.cantante) {
    console.log("Cantante");
  }
  if (persona.jd) {
    console.log("Jd");
  }
  if (persona.guitarrista) {
    console.log("Guitarrista");
  }
  if (persona.drone) {
    console.log("Piloto drones");
  }
}
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  
  return persona.edad >=  MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {

  if (esMayorDeEdad(persona)) {

    console.log(`${persona.nombre} es mayor de edad`);

  } else {

    console.log(`${persona.nombre}  es menor de edad `);
  }
}

imprimirProfesiones(mario);
imprimirProfesiones(ronald);
