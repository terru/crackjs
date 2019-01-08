/**
* Guia de algunas operaciones de programación funcional para js
*
*la clave es saber cuando y cómo aplicar estas funciones en projectos de desarrollo
*@nota ejecutar los fragmentos de codigo que representan cada funcion por separado usando
* node o la consola
*
* las funciones son inmutables, es decir una vez que se define una funcion, hacer una modificacion
* sobre la misma, debera conllevar crear una nueva version de la misma, con una modificacion
* esto es porque en escencia las funciones son de la clase Object, que es inmutable en js
**/

/** 
 * HOF o High Order Functions
 * Las funciones que operan otras funciones, ya sea tomandolas como argumentos o usandolas como
 * valor de retorno, son llamadas funciones de alto órden o HOF.
 * Matematicamente una HOF se puede ver como cualquier t(x) donde x tiene la forma f(x)
 * 
 * */

//HOF es una funcion que crea a otra funcion(closure constructor)
function greaterThan(n) {
  return m => m > n; //funcion
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // → true


//HOF tambien es una funcion que cambia a otra, por ejemplo haciendo que muestre mas datos
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

//se puede incluso pensar en funciones que alteran flujos de control

function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even


/*
* Funciones Puras 
* Un tipo especifico de estas funciones son las puras, en donde dando un input especifico, 
* siempre se devuelve el mismo output.
*/

//map, devuelve un nuevo arreglo aplicando una funcion de transformacion

[2, 3, 4, 5].map(function (i) {
  console.log(i);
  //notar que con esto se puede iterar el arreglo, aunque no es lo mas recomendable
})

function transformar_arreglo(arreglo) {
  return arreglo.map(function (e) {
    if (Array.isArray(e)) {
      return transformar_arreglo(e);
    } else {
      return e;
    }
  });
}
transformar_arreglo([1, 2, 4, [2, 3], 4]);

//con reduce se puede tomar un acuumulador y el valor y devover en el acuumulador
//una transformacion aplicada al elemento

var arr = [[1, 2], [3, 4], [5, 6]];
var flattenedArray = [1, 2, 3, 4, 5, 6];
var flattenedArray = arr.reduce((accumulator, currentValue) => {
  //notese que Array.prototype.concat toma el arreglo y lo concatena con el siguiente
  return accumulator.concat(currentValue);
}, []); // returns [1, 2, 3, 4, 5, 6]


//filter devuelve los elementos que pasan un filtro del transformar_arreglo
//filtrar solo los arreglos de 1
arr.filter((elem) => {
  return Array.isArray(elem) ? elem.length == 1 : true
});

//some && every
// al igual que cualquier operador de colecciones, las funciones some && every devuelven
// some -> true si alguno de los elementos cumple la condicion, false caso contrario
// every -> true si todos los elementos cumplen la condicion, false caso contrario

//un buen ejercicio para comprender su funcionamiento a fondo es implementar una usando la otra
//para esto se aplica ley de morgan donde a && b = !(!a || !b)

//es decir:
// para saber que todos los elementos cumplen una condicion hay que :
function every(array, test) {
  //no hayar ningun elemento que no la cumpla
  let returner = !array.some(e => {
    return !test(e)}); 
  return returner; //seria true si algun elemento no la cumple, por lo tanto si es false
  //todos los elementos cumplen la condicion
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


//implementar la funcion some() con every es contrareciproco, queda como practica