/**
 * Practica de expresiones regulares y funciones necesarias en js
 * @use ejecutar usando node o consola los distintos fragmentos de codigo
 */

//formas de inicializacion
var re = /ar/;
var re = new RegExp('ar');
//exec chequea
re.exec("car");
re.exec("cab");

//letras directas
var re1 = /[AEIOU]/;
re1.exec("Oval"); // returns ["O", index: 0, input: "Oval"]
re1.exec("2456"); // null

//caracteres
var re4 = /\d\D\w/;
re4.exec('1232W2sdf'); // returns ["2W2", index: 3, input: "1232W2sdf"]
re4.exec('W3q'); // returns null

//funcion match
//si la cadena coincide o no con el patron
"2345-678r9".match(/[a-z A-Z]/); // returns ["r", index: 8, input: "2345-678r9"]

//funcion replace
//reemplazar la cadena que matchea con el patron, por la cadena en argumento 2
"2345-678r9".replace(/[a-z A-Z]/, ""); // returns 2345-6789
