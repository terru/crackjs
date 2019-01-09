/**
 * @see Basic.js
 * Destructuring
 * Permite hacer los binding usando patrones, con soporte para arreglos y objetos
 * Resulta importante porque es fail-soft, similar a el estandar al buscar objetos del estilo
 * foo["bar"], si no existe devuelve undefined, no genera un error.
 *
 */
// list matching
//se puede asignar listas uno a uno
var [a, , b] = [1, 2, 3];
a === 1;
b === 3;

// object matching
//se pueden asignar objetos propiedad a propiedad
var {
  op: a,
  lhs: { op: b },
  rhs: c
} = getASTNode();

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
//se pueden asignar variables a las propiedades que se llamen igual en un objeto
var { op, lhs, rhs } = getASTNode();

// Can be used in parameter position
//se puede usar para parametros anonimos
function g({ name: x }) {
  console.log(x);
}
g({ name: 5 });

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;

// Destructuring + defaults arguments
//el uso mas usual, para definir parametros por defecto
function r({ x, y, w = 10, h = 10 }) {
  return x + y + w + h;
}
r({ x: 1, y: 2 }) === 23;
