var mario = {
    nombre: 'Mario',
    apellido: 'Fernandez',
    edad: 20
}

var fernandez = {
    nombre: 'Enrique',
    apellido: 'Serrano',
    edad: 25

}

function imprimirNombreEnMayusculas({nombre}){
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(mario)
imprimirNombreEnMayusculas(fernandez)

// imprimirNombreEnMayusculas({nombre: 'ronald'})
imprimirNombreEnMayusculas({apellido: 'Serrano'})