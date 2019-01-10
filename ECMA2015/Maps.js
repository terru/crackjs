/**
 * Soporte para Estructuras de datos optimizadas
 * ECMA6 tiene incorporadas la posibilidad de utilizar estructuras maps y sets
 * que resultan mas adaptables e intuitivas en su utilizacion, en algunos casos
 * que las listas o arreglos
 */

//MAPS
//se pueden setear pares clave-valor y consultar si existen o no
//se puede administrar el map mediante la interface .get, .set, .has
let equipo_pokemon = new Map();
equipo_pokemon.set("Articuno", 50);
equipo_pokemon.set("Umbreon", 51);
equipo_pokemon.set("Charizard", 60);

console.log(`Articuno es nivel: ${equipo_pokemon.get("Articuno")}`);
console.log("Atrape un Mewtwo?", equipo_pokemon.has("Mewtwo"));
//a diferencia de un {} con el que se podria hacer el equipo
//toString no existe en el map
console.log(equipo_pokemon.has("toString")); // → false

//SETS
/**
 * Un set acumula colecciones de objetos, igual que un map.
 * No asocia valores a una clave, siemplemente chequea la unicidad de
 * los elementos que posee.
 * Si el elemento ya fue agregado, no se vuelve a agregar 
 * metodos add, has,entries, values 
 * propiedad size. 
 * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Set/size
 */
var mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("un texto")

mySet.size; //3