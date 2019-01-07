/**
 * Repaso de version Revealing Module pattern para encapsulamiento en js
 * El modulo permite manejar cuales mensajes/metodos seran de orden publico  y cuales privados
 * 
 */

/**Se define una funcion anonima con la forma de Immediately-Invoked Function Expression
* la funcion es asignada a una variable para reutilizarla ya definida 
*los metodos privados quedan protegidos en el scope de la función definida
* @see tomado de https://addyosmani.com/resources/essentialjsdesignpatterns/book/
*/
var myRevealingModule = (function () {
    var privateVar = "Terru",
        publicVar = "Holis....";

    function privateFunction() {
        //esta funcion no puede ser llamada desde afuera del modulo
        console.log("Name: " + privateVar);
    }

    function publicSetName(strName) {
        //la unica forma de setear esta variable es con un setter
        privateVar = strName;
    }

    function publicGetName() {
        //notar que esta funcion de orden publico llama a una privada en el scope
        privateFunction();
    }

    //se retorna un diccionario con los mensajes que se quieren exportar
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
})();

//de esta forma, solo lo exportado se puede alcanzar
myRevealingModule.getName();
myRevealingModule.setName("Agustin Terruzzi");
console.log(myRevealingModule.greeting);
myRevealingModule.getName();