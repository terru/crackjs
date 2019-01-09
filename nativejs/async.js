/**
 * Practica de asincronismo en js
 * Existen varias formas de trabajar con el asincronismo en js
 * Esta practica busca repasar algunas enfoncandose principalmente en los 
 * más utilizado y nuevo
 * @see https://tylermcginnis.com/async-javascript-from-callbacks-to-promises-to-async-await/
 * callbacks, Promises, async/await, error handling
 */

/**
 * Callbacks.
 * En javascript se puede pasar una referencia a una funcion como argumento. Cuando se envia 
 * una función como argumento, dicha funcion se conoce como callback y la funcion que recibe
 * el argumento es conocida como HOF o higher order function 
 * @see ./funcional.js para mas datos de HOF 
 */

//si bien los callbacks se usan en practicamente todos los casos de aplicabilidad para
//programacion funcional, resulta logico pensarlos como la forma de retrasar la ejecucion
//hasta que se produzca algun tipo de evento asincronico como la recolección de datos o la 
//consulta de APIS mediante HTTP request

const id = 'llamadoaAPI'

function updateUI() {
    console.log('Actualizo la UI cuando tengo los datos...');
}

function showError() {
    console.error('Ocurrio un error al traer los datos de la API')
}

$.getJSON({
    url: `https://api.github.com/users/${id}`,
    success: updateUI,
    error: showError,
});

//notese que success es el hook para ejecutar una funcion cuando el resultado del request existe


/**
 * Promises
 * Como los callbacks dependian de la inversion de control, es decir, cuando usamos una libreria
 * o una herramienta que requiere callbacks, dependemos de que dicha herramienta ejecute la funcion
 * correctamente en el momento correcto, se penso en una alternativa donde el control lo tengamos 
 * nosotros, pero nos reporten un ESTADO, las promises. 
 */

//Las promesas pueden estar en tres estados: pending, fulfilled/complete or rejected,
//representando todos los estados posibles de un request asyncrono. 

//para crear una promesa, se crea una nueva instancia
const promise = new Promise();

//el constructor recibe dos funciones  resolve, reject, para indicar el cambio de estado
//promise hasta resolve -> pending -> resolve() -> fullfilled
//pending -> reject() -> rejected;
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve() // Change status to 'fulfilled'
    }, 2000)
});

//para observar los cambios de estado de una promise, el prototype de Promise entiende dos mensajes
//catch y then

//definimos entonces los callback para cada hook
function onSuccess() {
    console.log('Success!')
}

function onError() {
    console.log('Error en la promise')
}
//los asignamos a la promise que acabamos de construir
promise.then(onSuccess)
promise.catch(onError)
//en un caso de uso real, se puede apreciar la mejora sobra callback
function getUser(id) {
    return new Promise((resolve, reject) => {
        $.getJSON({
            url: `https://api.github.com/users/${id}`,
            success: resolve,
            error: reject
        })
    })
}
//luego se puede consumir la funcion a traves de los observers
getUser(id).then(r => console.log("REsultado: " + r)).catch(e => console.error('error:' + e));
//logicamente los metodos then & catch devuelven promises por lo que tmbien se pueden encandenar
$("#btn").on("click", () => {
    getUser("terru") //promise 1
        .then(getWeather) //tengo el usuario, dame el clima
        .then((data) => updateUI(data)) //tengo todos los datos, actualiza interfaz
        .catch(showError) //en algun lugar de la cadena hubo un error, mostralo
});

//con esto se puede apreciar la mejora sustancial sobre los callback, 
//no obstante, se puede mejorar mas

/**
 * Async / Await
 * Para buscar simplificar el codigo, y hacerlo mas parecido a los mensajes sincrónicos
 * en ecma2015 se busco la idea de insertar palabras claves para detectar los llamados async
 * de esto, las promises mejoraron para ser mas legibles y comprensibles estaticamente
 * utilizando las sentencias async y await
 */

//se usa async para indicarle al motor que la siguiente funcion sera asincronica y debe esperarla

async function asincronica() {
    console.log('Holis soy asicronica...')
}
//o en lambda mode
async () => { console.log('Holis soy asicronica...') };

//de la misma forma, se usa await para indicarle a nuestro motor que ahora debe esperar
//que la funcion asincronica sea resuelta;

const holis = await asincronica();

//recordar que una funcion cuyo preambulo es async, siempre devolvera una promise
//recordar que await solo se puede usar para funciones declaradas con async

//resta tratar los errores que puedan surgir
//como no se tiene un .catch en async/await, se tiene que usar el scope global

//se define la circunstancia en donde tirar el error
async function asicronica() {
    throw Error('me rompi al saludar..');
}
//se toma en el catch 
try {
    const holis = await asincronica();
}catch (e) {
 console.error('HOlis tuvo un error, chaucito...');
}

//de esta forma, se puede reescribir el codigo que consulta a la api de la siguiente forma.

$("#btn").on("click", async () => {
    try {
      const user = await getUser('terru');
      const weather = await getWeather(user.location);
      updateUI({
        user,
        weather,
      })
    } catch (e) {
      showError(e)
    }
  })