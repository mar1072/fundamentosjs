var mario = {
    nombre: 'Mario',
    apellido: 'Fernandez',
    edad: 20
}

var ronald = {
    nombre: 'Ronald',
    apellido: 'Fernandez',
    edad: 25

}

function imprimirNombreEnMayusculas(persona){

    //var nombre = persona.nombre
    
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(mario)
imprimirNombreEnMayusculas(ronald)

// imprimirNombreEnMayusculas({nombre: 'ronald'})
// imprimirNombreEnMayusculas({apellido: 'Serrano'})


// Reto :)


// var yo = {
//     nombre: 'Marius',
//     apellido: 'Fedz',
//     edad: '1.600'
// }

// function imprimirNombreYEdad ({nombre, edad}){
//   //Hola me llamo Mario y tengo 1.600 años
//     console.log (`Hola me llamo, ${nombre} y tengo ${edad} años`)

// }
// imprimirNombreYEdad(yo)