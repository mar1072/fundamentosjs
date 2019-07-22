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

function imprimirNombreEnMayusculas(persona){
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(mario)
imprimirNombreEnMayusculas(fernandez)

// imprimirNombreEnMayusculas({nombre: 'ronald'})
// imprimirNombreEnMayusculas({apellido: 'Serrano'})


// Reto :)


// var yo = {
//     nombre: 'Marius',
//     apellido: 'Fedz',
//     edad: '5.000'
// }

// function imprimirNombreYEdad ({nombre, edad}){
//     //Hola me llamo Mario y tengo 5.000 años
//     console.log (`Hola me llamo, ${nombre} y tengo ${edad} años`)

// }
// imprimirNombreYEdad(yo)