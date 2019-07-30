var mario = {
  nombre: "Mario",
  apellido: "Fernandez",
  edad: 28,
  peso: 75
};

console.log(`Al inicio del año ${mario.nombre} pesa ${mario.peso}kg`);

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);
const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
  var random = Math.random();

  if (random < 0.25) {
    aumentarDePeso(mario);
  } else if (random < 0.5) {
    adelgazar(mario);
  }
}

console.log(`Al final del año ${mario.nombre} pesa ${mario.peso.toFixed(1)} kg`);
