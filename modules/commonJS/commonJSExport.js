/**
 * Ejemplo de organización de código utilizando commonJS, pensado e implementado para utilizar javascript
 * desde el lado del servidor.
 * Fue muy importante en el comienzo de node.js y por eso resulta importante conocerlo
 * para entender el código y el funcionamiento de node. 
 */

/** Un modulo exportado es una abstraccion de código que se desea consumir desde otro lugar
//cualquier fragmento de código que no este en el scope de la función exports, no podrá ser accedido 
es un caso de encapsulamiento a nivel archivo
*/

const PI = Math.PI;

//simplemente se exportan las funciones del modulo que queremos utilizar
exports.area = (r) => PI * r * r;

exports.circumference = (r) => 2 * PI * r;

