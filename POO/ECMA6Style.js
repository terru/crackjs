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
    console.log('Pokemon: ' + this.especie + ' realizo un ataque');
  }
  pokedex() {
      console.log('Pokemon de tipo: ' + this.tipo);
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
Pokemon.prototype.toString = function () {
  console.log('Esto es un pokeon real');
};
console.log(Pokemon.toString());
