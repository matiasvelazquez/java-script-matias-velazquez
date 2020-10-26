/*Ejercicio 4
If Else
1: Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
2: Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
For
*/
console.log('- If Else Exercise Answers -');
//First
var num = Math.random();
if (num >= 0.5) {
    alert('Greater than 0.5: ' + num);
    console.log('Greater than 0.5: ' + num);
    console.log
} else if (num < 0.5) {
    alert('Lower than 0.5: ' + num);
    console.log('Lower than 0.5: ' + num);
}
//Second
var age = 80 * Math.random(); //Random age
age = Math.round(age); //Rounds the age to integer number
if (age < 2) {
    console.log('Baby: ' + age + ' Years');
} else if (2 <= age && age <= 12) {
    console.log('Boy: ' + age + ' Years');
} else if (13 <= age && age <= 19) {
    console.log('Teenager: ' + age + ' Years');
} else if (20 <= age && age <= 30) {
    console.log('Young: ' + age + ' Years');
} else if (31 <= age && age <= 60) {
    console.log('Adult: ' + age + ' Years');
} else if (61 <= age && age <= 75) {
    console.log('Grown-up Adult: ' + age + ' Years');
} else if (age > 75) {
    console.log('Old Man: ' + age + ' Years');
}
