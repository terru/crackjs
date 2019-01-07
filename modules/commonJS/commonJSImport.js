/**
 * Importador del patron commonJS, muy utilizado en node.js
 * @see ./commonJSExport;
 * 
 * Recordar que: 
 * Que los modulos COmmonJS fueron diseñados con el desarrollo para servidores en mente
 * Por lo que naturalmente, la API es sincronica. En otras palabras, los modulos son cargados
 * en el momento y en el orden en el que son requeridos en el archivo importador.
 */

//Para utilizar el modulo exportado, se usa la palabra clave require
const circle = require('./commonJSExport');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);