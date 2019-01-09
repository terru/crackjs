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
console.log(equipo_pokemon.has("toString"));// → false

//SETS
