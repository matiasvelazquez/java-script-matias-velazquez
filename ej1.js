/* Ejercicio 1
Variables y Operadores
1:Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
2: Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
3: Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
*/
//First
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
// Second and Third
var name = 'matias ';
var lastName = 'velazquez';
var nandln = name + lastName;
var lenName = name.length + lastName.length;
//Displays
console.log('- Answers to the exercise: Variables and operators -');
console.log('sum = ' + sum);
console.log('Name and last name: ' + nandln);
console.log('Length: ' + lenName);
