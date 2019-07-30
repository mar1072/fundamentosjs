var mario = {
    nombre: 'Mario',
    apellido: 'Fernandez S',
    edad: 29
}

var ronald = {
    nombre: 'Ronald',
    apellido: 'Fernandez S',
    edad: 25

}

function imprimirNombreEnMayusculas({nombre}){
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(mario)
imprimirNombreEnMayusculas(ronald)

imprimirNombreEnMayusculas({nombre: 'Fernandez'})
// imprimirNombreEnMayusculas({nombre: 'ronald'})