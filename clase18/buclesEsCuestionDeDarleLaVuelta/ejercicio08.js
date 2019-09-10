// Ejercicio 08
// Dado el array [1,2,3,4,5,6] y un segundo array vacío [], recorrer el primero y usar el método push para agregar todos los valores del array inicial incrementados en 1 al array vacío. Mostrar por terminal el segundo array, el que inicialmente estaba vacío. Deberíamos ver [2, 3, 4, 5, 6, 7].

let numeros = [1, 2, 3, 4, 5, 6]
let nuevoArray = []
for (let i = 0; i < numeros.length; i++) {
    nuevoArray.push(numeros[i] + 1)
    console.log(nuevoArray[i]);
}
