/**
 * Repaso de version ECMA2015 de los patrones orientados a modulos
 * El modulo permite manejar cuales mensajes/metodos seran de orden publico  y cuales privados
 * con el patron definido en ECMA2015
 * 
 * El patron junta lo mejor de CommonJS y AMD, permitiendo tanto importanciones sinc como async
 * 
 * Ademas de incorporar palabras clave para la gestion de modulos de manera nativa 
 * @see tomado de http://2ality.com/2014/09/es6-modules-final.html
 */

//con export se define lo que se quiere exportar del archivo, puede ser cualquier tipo valido de JS
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

