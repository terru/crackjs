/**
 * Clases
 * Las clases fueron incorporadas para mejorar la sintaxis de POO del patron de prototypado de JS
 * Tienen soporte para metodos de instancia, clase, super y constructores
 * @see POO directory para mas ejemplos y usos
 */

class TipoFuego extends Pokemon {
    constructor(especie, ataques) {
      super(especie);
      //variable de subclase
      this.ataques = ataques;
    }
    //mensaje de instancia
    update(ataques) {
      this.ataques = ataques; //aprendio un nuevo ataque
      super.update();
    }
    //metodo de clase
    static pokedex() {
      return console.log("Los tipo fuego son buenos contra los hierba y hielo");
    }
  }
  const charmander = new TipoFuego();
  
  /**
   * Enhanced Object Literal
   * Se mejoraron el acceso y agregaron literales a los object para que sean compatibles
   * con los metodos de clase
   */
  
  var obj = {
    // Sets the prototype. "__proto__" or '__proto__' would also work.
    __proto__: theProtoObj,
    // Computed property name does not set prototype or trigger early error for
    // duplicate __proto__ properties.
    ["__proto__"]: somethingElse,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
      // Super calls
      return "d " + super.toString();
    },
    // Computed (dynamic) property names
    ["prop_" + (() => 42)()]: 42
  };
  