/**
 * Main.js se utiliza para mostrar como se da el import en la gestion 
 * de modulos de ECMA2015
 * @see ./ES2015Lib.js para ver los export y mas datos del patron
 * tener en cuenta que en la version LTS de node.js todavia no esta disponible
 */

//carga de modulos externos con la palabra clave import
import { square, diag } from 'lib';

//OR import * from 'lib' y despues lib.square, lib.diag

/**
 * Notar que tanto import como export son estaticos, lo que permite a los analizadores estáticos de
 * sintaxis generar y comprobar el arbol de dependencias en compilación, siendo de gran ayuda
 * en la correcion de errores
 */

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5


//existe un draft (por lo menos por ahora) que propone una forma de carga dinamica en system.js

System.import('some_module')
    .then(some_module => {
        // Use some_module
    })
    .catch(error => {
        // error al cargar el modulo
    });


//las librerias que usan versiones nuevas de ECMA, lo compilan con BABEL porque no esta soportado
//de forma nativa por los navegadores, cuando se usa BABEL, se recomienda el uso de este patron