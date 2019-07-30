var mario = {
  nombre: "Mario",
  apellido: "Fernandez",
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  jd: false,
  guitarrista: false,
//   drone: true
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero) {
    console.log("ingeniero");
  }else {
     console.log('No es Ingeniero')  
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

imprimirProfesiones(mario)
