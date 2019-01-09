/**
*Practica nodejs y express
* Guia de uso de nodejs para construir un pequeño servidor web
**/

//Para un ruteo sencillo inicial
//inicializar la app
const express = require('express');
const app = express();
//creamos el router
const router = express.Router();

//definimos al menos una ruta para el ruter
router.get("/",function(req,res){
  res.json("API WORKING");
});

//en el evento de reuquest a /api asociamos el router;
app.use('/api',router);

//definimos el puerto donde levantar el server;
const port = process.ENV.PORT || 3000;

//levantamos el server
app.listen(port);

console.log("APP running in port: "  + port);


//async await, Practica
//const "jhon doe"
// for (const) // list= [1,2,4,5];
//funciones anonimas;
//array functions


const agent = {
  name = "John doe";
  algo: function () {
    console.log(algo);
  }
}

const agent= agent();
agent.algo();
