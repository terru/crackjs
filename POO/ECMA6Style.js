/**
 * Repaso de funcionalidades agregadas para POO en ECMA6
 */

/**
 * Notacion Class
 * En ecma6 se incorporaron las clases
 * De forma simple, las clases son funciones constructoras con
 * una propiedad prototype, que permiten definir clases de forma
 * mas intuitiva
 */

class Pokemon {
  constructor(tipo, especie, nombre) {
    this.tipo = tipo;
    this.especie = especie;
    this.nombre = nombre;
  }

  attack() {
    console.log("Pokemon: " + this.especie + " realizo un ataque");
  }
  pokedex() {
    console.log("Pokemon de tipo: " + this.tipo);
  }

  static evolve() {
    console.log("Pokemon is evolving....");
  }
}

let dragonite = new Pokemon("dragon", "dragonite", "drog");
dragonite.attack();

//cuando se agrega una propiedad, ya sea a traves de prototipo o no, se modifica el objeto
//la clase sigue siendo igual;
Pokemon.prototype.tipo = "Normal";
dragonite.pokedex();
dragonite.tipo = "Volador";
dragonite.pokedex();

/**
 * Polimorfismo
 * Se puede reescribir cualquier mensaje o propiedad desde el prototype de la clase4
 * incluso los de la clase object
 */
Pokemon.prototype.toString = function() {
  console.log("Esto es un pokeon real");
};
console.log(Pokemon.toString());

//Metodos estaticos
//asi como en ECMA5, los metodos estaticos definen metodos de clase
//este es el caso del metodo evolve de la clase pokemon
Pokemon.evolve();

/**
 * Herencia
 * Javascript permite herencia mediante la copia y agregado de metodos/propiedades
 * a traves del uso de los prototypos de las distintas clases
 * Herencia es un concepto clave en POO, da la posibilidad de reutilizar el código
 * ya construido y adecuarlo a nuevas situaciones.
 */
class Tigo_Dragon extends Pokemon {
  constructor(especie, nombre) {
    //palabra clave para acceder a propiedades y metodos de la superclase
    super("Dragon", especie, nombre);
  }
  attack() {
    console.log("El pokemon: " + this.especie + " ataca con furia dragon");
  }
}

const dratini = new Tigo_Dragon("Dratini", "chimuelo");
dratini.pokedex(); //queda igual
dratini.attack(); //subclase

//instanceof operator, para chequear si un objeto pertenece o no a una clase 
console.log(dratini instanceof Pokemon); //true
console.log(dratini instanceof Tigo_Dragon); //true
