/**
 * Iterators
 * Los objetos iteradores permiten realizar iteraciones personalizadas
 * en distintos tipos de colecciones
 *
 */

//se definen las reglas para iterar mediante next(), pre y cur
let fibonacci = {
  //symbol.iterator define un iterador para fibonacci a utilizar por of
  [Symbol.iterator]() {
    let pre = 0,
      cur = 1;
    return {
      //next se ejecuta en cada iteracion con un valor de iteracion
      next() {
        //el ejecutar next pre = cur y cur = pre + cur
        [pre, cur] = [cur, pre + cur];
        //next informa si termino o no y el valor de la iteracion
        return { done: false, value: cur };
      }
    };
  }
};

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000) break;
  console.log(n);
}

/**
 * Generators
 * Generators simplify iterator-authoring using function* and yield.
 * Los generadores simplifican la iteracion de los iteradores usando function* y yield.
 * Una funcion declarada como function* retorna una instancia de Generator.
 * Los generadores son subtipos de iteradores que incluyen next & throw functions
 * Esto permite a los valores flotar hacia atras en los generadores, de aqui que se usa
 * yield, una expresion que puede retornar un valor o tirar un error
 *
 */

var fibonacci = {
  //defino function* para que sea un generador
  [Symbol.iterator]: function*() {
    var pre = 0,
      cur = 1;
    for (;;) {
      //hacer los calculos
      var temp = pre;
      pre = cur;
      cur += temp;
      //devolver el valor o tirar un error
      yield cur;
    }
  }
};

try {
  for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000) break;
    console.log(n);
  }
} catch (e) {
  console.log("Yield error Happened.." + e);
}
