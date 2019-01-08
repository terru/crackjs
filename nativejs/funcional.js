/**
Guia de algunas operaciones de programación funcional para js
**/

//Existen varias funciones de programación funicional muy utiles en js
//un tipo especifico dee estas funciones son las puras, en donde dando un input especifico, siempre se devuelve el
//mismo output, algunaas de estas son:

//map, devuelve un nuevo arreglo aplicando una funcion de transformacion

[2,3,4,5].map(function(i) {
  console.log(i);
  //notar que con esto se puede iterar el arreglo, auqnue no es lo mas recomendable
})

function transformar_arreglo (arreglo) {
  return arreglo.map(function (e){
      if (Array.isArray(e)) {
        return transformar_arreglo(e);
      }else {
        return e;
      }
  });
}
transformar_arreglo([1,2,4,[2,3],4]);

//con reduce se puede tomar un acuumulador y un reducer y devover en el acuumulador
var arr = [[1, 2], [3, 4], [5, 6]];
var flattenedArray = [1, 2, 3, 4, 5, 6];
var flattenedArray = arr.reduce((accumulator, currentValue) => {
    //notese que Array.prototype.concat toma el arreglo y lo concatena con el siguiente
    return accumulator.concat(currentValue);
}, []); // returns [1, 2, 3, 4, 5, 6]

//filter devuelve los elementos que pasan un filtor del transformar_arreglo
//filtrar solo los arreglos de 1
arr.filter((elem) => {
   return Array.isArray(elem)?elem.length == 1:true
});
