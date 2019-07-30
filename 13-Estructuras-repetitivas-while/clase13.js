var mario = {
  nombre: "Mario",
  apellido: "Fernandez",
  edad: 28,
  peso: 75
};

console.log(`Al inicio del año ${mario.nombre} pesa ${mario.peso}kg`);

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);
const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = mario.peso - 3
var dias = 0


while (mario.peso > META) {
  
  if (comeMucho()) {
    aumentarDePeso(mario)
  }
  if (realizaDeporte()) {
    adelgazar(mario)
  }
  dias += 1
}


console.log(` Pasaron ${dias } días hasta que ${mario.nombre} adelgazó 3kg `);
