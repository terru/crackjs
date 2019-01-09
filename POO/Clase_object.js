/**
 * Esta es una guia incremental de usos de la clase object, se puede consultar cosas particulares
 * de la clase o se puede leer desde el principio
 * pasando y entendiendo todos los temas.
 */

/**
* Object.prototype provides more important functions that have many applications.
* Some of them are:
* Object.prototype.instanceof evaluates whether a given object is the type of 
* a particular prototype.
* Object.prototype.hasOwnProperty is useful to find out whether a given property/key 
* exists in an object.
*/

//instanceof
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var newCar = new Car("Frd", "fiesta", 2010);

console.log(newCar.hasOwnProperty(make));
console.log(newCar instanceof Car);

//freeze permite que las propiedades del auto queden sin modificar
Object.freeze(newCar);
console.log(Object.isFrozen(newCar));

//seal permite modificar propiedades pero no agregar
var otherCar = new Car("toyota", "corolla", 2015);
Object.seal(otherCar);
otherCar.terru = 3; //no lo agrega porque esta sellado;
console.log(Object.isSealed(otherCar));

//prototype para clases utilizando functions

function Pokemon(tipo, especie, nombre) {
  this.tipo = tipo;
  this.especie = especie;
  this.nombre = nombre;
}

var pikachu = new Pokemon("electrico", "pikachu", "pika-pika");

//prototype nos deja agregar un nuevo metodo publico a la clase
Pokemon.prototype.attack = function() {
  console.log("Pokemon: " + this.especie + " realizo un ataque");
};

//se puede usar call para hacer subclases
function Tipo_Electrico(tipo, especie, nombre) {
  Pokemon.call(this, tipo, especie, nombre);
  this.attack = function() {
    console.log("Pokemon: " + this.especie + " ataca con rayo!!");
  };
}
pikachu = new Tipo_Electrico("electrico", "pikachu", "pikalin");
pikachu.attack();

//Cosas para recordar para la herencia de prototipos
//Las propiedades de clase se unen usando this
function tipo_agua(name) {
  this.name = name;
}
//Los metodos de clase se unen mediante el objeto prototipo
tipo_agua.prototype.attack = function() {
  console.log("Pokemon: " + this.especie + " realizo surf!");
};

//para heredar propiedades se usa el metodo call pasando el objeto this
function tipo_agua() {
  Pokemon.call(this, name, type);
}

//para heredar metodos se usa Object.create para linkear los dos prototipos
//notar que el Object.create crea un objeto con un prototipo pasado por parametro
tipo_agua.prototype = Object.create(Pokemon.prototype);

//siempre setear el constructor con el nombre de la subclase para asegurarse de que el instanceof
//responda correctamente
Tipo_Electrico.prototype.constructor = Tipo_Electrico;