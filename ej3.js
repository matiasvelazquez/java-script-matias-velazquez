/*Ejercicio 3
Arrays
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
1: Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
2: Agregar un elemento al principio y al final del array (utilizar unshift y push).
3: Quitar un elemento del principio y del final del array (utilizar shift y pop).
4: Invertir el orden del array (utilizar reverse)
5: Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
6: Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
console.log('- Arrays Exercise Answers -');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//First
var alphabeticalOrder = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Alphabetical Order: ' + alphabeticalOrder.sort());
//Second
months.unshift('First Element');
console.log('Adds an element at the beginning: ' + months);
months.push('Last Element');
console.log('Adds an element at the end: ' + months);
//Third
months.shift('First Element');
console.log('Removes the beginning element: ' + months);
months.pop('Last Element');
console.log('Removes the last element: ' + months);
//Fourth
var reversed = months.reverse();
console.log('Reverse Order: ' + reversed);
months.reverse();
//Fifth
console.log('Join all the elements: ' + months.join('-'));
//Sixth
var months2 = months.slice(4, 11);
console.log('From May to November: ' + months2);


