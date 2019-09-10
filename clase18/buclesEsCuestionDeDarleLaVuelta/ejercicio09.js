// Ejercicio 09
// Dado el array [1,2,3,4,5,6] calcular el promedio y mostrarlo por pantalla

var numero = [10,2,3,4,5,6];
var sumatoria = 0
for(i=0; i< numero.length; i++){
   sumatoria += numero[i];
}
console.log(sumatoria);
var promedio = sumatoria / numero.length;
console.log(promedio)