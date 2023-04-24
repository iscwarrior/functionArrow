// function area(lados, valorLados, apotema) {
//     // let lados;
//     // let valorLados;
//     // let apotema;
//     let area = (lados * valorLados * apotema) / 2
//     return area;
// }

let area = (lados, valorLados, apotema) =>{
    let area = (lados * valorLados * apotema) / 2
    let perimetro = lados* valorLados;
    return area, perimetro;
}

let resultado = area(3, 15, 2)
console.log(resultado)

/*Opción 1 
Realizar programa que determine si una persona es meno o mayor de edad
Si hay mas de dos argumentos se usa parentecis despues de la asignacion
*/
let edad = numero => {
    let msj = ""
    if (numero >= 18) {
        msj = "Es mayor de edad"
    } else {
        msj = "Es menor de edad"
    }
    return msj;
}
console.log(edad(14))

/*Opción 2 usando operador ternario 
Realizar programa que determine si una persona es meno o mayor de edad
*/
let edad2 = numero =>(numero >= 18) ? "Es mayor de edad" : "Es menor de edad"
console.log(edad2(34))

let arr = {name: "dfg", age: 31 }
console.log(arr.name)

let persona1 = new Object()
persona1.nombre = 'Daniel'
persona1.apellido = "Flores"
persona1.edad = 31

console.log(persona1.edad)
console.log(persona1)

persona1.work = "dev"

console.log(persona1)
/*delete persona1.work */