/**
 * Ejemplo de patron de modulos AMD para controlar encapsulamiento y abstraccion
 * 
 * 
 * Este patron surgio como alternativa a CommonJS y esta mas orientado al lado del cliente
 * Por esto que la diferencia principal entre AMD y CommonJS tinee que ver con que AMD 
 * tiene soporte para la carga de modulos asincrónica
 * 
 * 
 * Por esta razon, la exportación de los modulos no varia con respecto a CommonJS
 * @see "../modules/commonJS/commonJSExports.js"
 */


//se llama a la función define y se le pasan un arreglo de dependencias
//y la funcion de construccion
define(['dep1', 'dep2'], function (dep1, dep2) {

    //tanto dep1 como dep2 se pueden utilizar, 
    //porque la función se ejecutara cuando las dependencias esten listas

    //se retorna un valor para definir el valor del modulo
    return function () { };
});

// Otra alternativa es recibir el require en la funcion de construccion
// e injectar la dependencia implicitamente:
define(function (require) {
    var dep1 = require('dep1'),
        dep2 = require('dep2');
    
    //se retorna un valor para definir el valor del modulo
    return function () { };
});

/**
 * !IMPORTANTE: tener en cuenta que esta es una implementación de ejemplo, node usa commonJS
 * por lo que si se quisiera realizar pruebas se debería instalar un gestor de modulos que soporte
 * la implementación AMD.
 * @see https://requirejs.org/
 */