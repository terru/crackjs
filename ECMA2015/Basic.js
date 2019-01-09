/**
 *Guia de funciones nuevas en ECMA2015
 * si bien a lo largo de este repositorio se hacen varias menciones a ECMA2015
 * aqui se intentan utilizar y explicar las funcionalidades mas importantes
 */

/*Arrows and Lexical This
 *se incorporan las funciones anonimas o arrow functions que comparten this
 *con la HOF que la contienen y lso argumentos que esta recibe
 */

function HOF(numero) {
  _ejemploThis = "Soy el this de HOF";
  const sumar = () => {
    console.log(this._ejemploThis);
    return numero + numero;
  };
  return sumar();
}

/**
 * Template Strings
 * Se usan entre `` y permiten strings de varias lineas, variables, etc
 */
//several-lines
const string = `Esta es una template string
que sigue aca`;
let a = 2;
//interpoling variable
const string2 = `Esta se combina con la variable ${a}`;
// Unescaped template strings
String.raw`En ES5 "\n" es un salto de pagina pero aca queda piola`;


/**
 * Default + Rest + Spread
 * Se agregan varios tipos de parametros compatibles con las funciones
 * Soporte para parametros por default, arreglos o argumentos consecutivos
 * Rest reemplaza la necesidad de casos comunes de argumentos y direcciones mas directamente.
 */

function defaultValue(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
defaultValue(3) == 15;

function arrayValues(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6

function f(x, y, z) {
  return x + y + z;
}
//tambien se puede pasar al reves, un arreglo de 3 matcheando con 3 parametros
f(...[1,2,3]) == 6

/**
 * Let + Const
 * Variables asociadas al bloque.
 *  let is the new var.
 *  const is single-assignment.
 * Se previene estaticamente el uso antes de asignacion y con esto
 * los problemas de hoisting. 
 */

function f() {
  {
    let x;
    {
      // this is ok since it's a block scoped name
      const x = "sneaky";
      // error, was just defined with `const` above
      x = "foo";
    }
    // this is ok since it was declared with `let`
    x = "bar";
    // error, already declared above in this block
    let x = "inner";
  }
}