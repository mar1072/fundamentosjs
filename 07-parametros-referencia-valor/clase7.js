var mario = {
  nombre: "Mario",
  apellido: "Fernandez",
  edad: 20
};

var fernandez = {
  nombre: "Enrique",
  apellido: "Serrano",
  edad: 25
};

function imprimirNombreEnMayusculas(persona) {
  //var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(mario);
imprimirNombreEnMayusculas(fernandez);

// imprimirNombreEnMayusculas({nombre: 'ronald'})
// imprimirNombreEnMayusculas({apellido: 'Serrano'})

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  };

  // persona.edad = persona.edad +1
//   persona.edad += 1;
}
