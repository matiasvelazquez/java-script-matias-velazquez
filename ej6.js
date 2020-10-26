/* Ejercicio 6
Funciones
1: Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
2: A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
3: Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
4: A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
5: Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/
console.log('- Answers to the functions exercise -');
//First and Second
function sum(a,b) {
    if (isNaN(a) && isNaN(b)) {
        console.log('ERROR! Both parameters are not numbers!');
        return NaN
    }
    else if (isNaN(a)) {
        console.log('ERROR! First parameter is not a number!');
        return NaN
    } else if (isNaN(b)) {
        console.log('ERROR! Second parameter is not a number!');
        return NaN
    } else {
        var mysum = a + b;
        return mysum;
        console.log(mysum);
    }
}
//Third
function validateInteger(a) {
    if (a % 1 == 0) {
        console.log("True");
    } else {
        console.log("False");
    }
}
//Fourth
function sum2(a,b) {
    if (a % 1 != 0 && typeof a == "number" && b % 1 != 0 && typeof b == "number") {
        console.log("Error! Both parameters are decimal numbers!");
        return a = Math.round(a);
        return b = Math.round(b);
    } 
    if (a % 1 != 0 && typeof a == "number") {
            console.log("Error! First parameter is a decimal number!");
            a = Math.round(a);
    } 
    if (b % 1 != 0 && typeof b == "number") {
            console.log("Error! Second parameter is a decimal number!");
            b = Math.round(b);
    } 
    if (isNaN(a) && isNaN(b)) {
        console.log('ERROR! Both parameters are not numbers!');
        return NaN
    }
    else if (isNaN(a)) {
        console.log('ERROR! First parameter is not a number!');
        return NaN
    } else if (isNaN(b)) {
        console.log('ERROR! Second parameter is not a number!');
        return NaN
    } else {
        var mysum = a + b;
        return mysum;
        console.log(mysum);
    }
}
//Fifth
function sum3(a,b) {
    function validateIntegers(a,b) {
        if (a % 1 != 0 && typeof a == "number" && b % 1 != 0 && typeof b == "number") {
            console.log("Error! Both parameters are decimal numbers!");
            return a = Math.round(a);
            return b = Math.round(b);
        } 
        if (a % 1 != 0 && typeof a == "number") {
            console.log("Error! First parameter is a decimal number!");
            return a = Math.round(a);
        } 
        if (b % 1 != 0 && typeof b == "number") {
            console.log("Error! Second parameter is a decimal number!");
            return b = Math.round(b);
        }
    }
    validateIntegers(a,b);
    if (isNaN(a) && isNaN(b)) {
        console.log('ERROR! Both parameters are not numbers!');
        return NaN
    }
    else if (isNaN(a)) {
        console.log('ERROR! First parameter is not a number!');
        return NaN
    } else if (isNaN(b)) {
        console.log('ERROR! Second parameter is not a number!');
        return NaN
    } else {
        var mysum = Math.round(a) + Math.round(b);
        return mysum;
        console.log(mysum);
    }
}