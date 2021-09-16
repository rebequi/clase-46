const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

// 1. Hacer una funcion "ordenarAlfabeticamente" que reciba un array y lo retorne ordenado alfabeticamente. 

const ordenarAlfabeticamente = (array) => {
   return array.sort()
}

console.log(ordenarAlfabeticamente(moana))
console.log(ordenarAlfabeticamente(frozen))

// 2. Hacer una funcion "revertirOrden" que reciba un array y retorne sus elementos en orden inverso. 

const revertirOrden = (array) => {
return array.reverse (ordenarAlfabeticamente)
}

console.log(revertirOrden(moana))
console.log(revertirOrden(frozen))

// 3. Hacer una funcion "incluyeNombre" que reciba un array y un string y retorne true 
// si el array incluye al string, o false en caso contrario. 

const incluyeNombre = (array, nombre) => {
    if (array.includes(nombre)) {
        return true
    }

    else {
        return false
    }

}

console.log(incluyeNombre(moana, "Ana"))// false
console.log(incluyeNombre(frozen, "Ana")) // true

// 4. Hacer una funcion "ultimosDos" que reciba un array y 
// retorne un array con los ultimos dos elementos del original. 

const ultimosDos = (array) => {
return array.slice(-2)
}

console.log(ultimosDos(moana)) 
console.log(ultimosDos(frozen))
