/* Ejercicio 2
Strings
1: Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
2: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
3: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
4: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
5: Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
6: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
//First, Second And Third
var name = 'abcdefghij';
var nameuc= name.toUpperCase();
var firstFive = name.substring(0,5);
var lastThree = name.substring(7,10);
//Fourth
var firstLetter = name.substring(0,1);
var lastNine = name.substring(1,10);
firstLetter = firstLetter.toUpperCase();
var firstuc = firstLetter + lastNine;
//Fifth
var nameWithSpace = 'abcde fghij';
var spaceInd = nameWithSpace.indexOf(' ');
//Sixth
var largeName = 'abcdefghij klmnopqrst';
var firstWorduc = largeName.substring(0,1);
firstWorduc = firstWorduc.toUpperCase();
var firstWordlc = largeName.substring(1,10);
firstWordlc = firstWordlc.toLocaleLowerCase();
var secondWorduc = largeName.substring(11,12);
secondWorduc = secondWorduc.toUpperCase();
var secondWordlc = largeName.substring(12,21);
secondWordlc = secondWordlc.toLocaleLowerCase();
var newName = firstWorduc + firstWordlc + (' ') + secondWorduc + secondWordlc;
//Displays
console.log('- Answers to the Strings Exercise -');
console.log('Everything in Upper Cas: ' + nameuc);
console.log('First Five Characters: ' + firstFive);
console.log('Last Three Characters: ' + lastThree);
console.log('First letter in Upper Case: ' + firstuc);
console.log('Index of the Blank Space: ' + spaceInd);
console.log('String with Two Words: ' + newName);

