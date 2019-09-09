// Ejercicio 05
// Pedirle al usuario un número y mostrar por la terminal los números entre 1 y ese número

var numero = parseInt(prompt("Escribe un numero"))
if(numero>0){
	for (let i = numero; i>0; i--){
		console.log(i)
	}
} else {
	for (var i=numero;i<=1; i++){
		console.log(i)
	}
}