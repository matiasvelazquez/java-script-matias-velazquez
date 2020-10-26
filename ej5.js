/*Ejercicio 5
For
1: Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
2: Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
3: Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
4: Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
*/
console.log('- Exercise For Answers -');
//First
console.log('First For: ')
var numbers = ["one","two","three","four","five"];
for (var i = 0 ; i < 5 ; i++) {
    console.log(numbers[i]);
}
//Second
console.log('Second For: ')
for (var i = 0 ; i < 5 ; i++) {
  var word = numbers[i];
  word = word[0].toUpperCase() + word.slice(1);
  console.log(word);
}
//Third
console.log('Third For: ')
var sentence = '';
for (var i = 0 ; i < 5 ; i++) {
    sentence = sentence + numbers[i];
}
console.log(sentence);
//Fourth
console.log('Fourth For: ')
var empty = [];
for (var i = 0 ; i < 10 ; i++) {
    empty.push(i);
}
console.log(empty);