/**
 * Ejemplo de patron de modulos AMD para controlar encapsulamiento y abstraccion
 * 
 * 
 * Este patron surgio como alternativa a CommonJS y esta mas orientado al lado del cliente
 * Por esto que la diferencia principal entre AMD y CommonJS tinee que ver con que AMD 
 * tiene soporte para la carga de modulos asincrónica
 * 
 * 
 */


//se llama a la función define y se le pasan un arreglo de dependencias
//y la funcion de construccion
define(['dep1'], function (dep1) {

    //tanto msg1 como msg2 se pueden utilizar desde afuera
    function msg2() {
        console.log('AMD module sending message number 2');

    }

    //se retorna lo consumible desde el modulo
    return {
        msg: function () {
            console.log('AMD module sending message');
        },
        msg2: msg2
    };
});

// Otra alternativa es recibir el require en la funcion de construccion
// e injectar la dependencia implicitamente:
define(function (require) {
    var dep1 = require('dep1'),
        dep2 = require('dep2');

    //se retornan las dependencias de la misma forma que antes
    return function () { };
});

/**
 * !IMPORTANTE: tener en cuenta que esta es una implementación de ejemplo, node usa commonJS
 * por lo que si se quisiera realizar pruebas se debería instalar un gestor de modulos que soporte
 * la implementación AMD.
 * @see https://requirejs.org/
 */