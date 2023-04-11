// // Operador nullish: comprueba los valores cuando no son numericos o no estan definidos.
// El valor null es un literal de Javascript que representa intencionalmente un valor nulo o "vacío". Es uno de los valores primitivos de Javascript.

const prueba = false;

const variableAsignada = prueba || 'Sin valor';

const nullish = prueba ?? 'Sin valor';

console.log(variableAsignada);
console.log(nullish);


// Variables privadas dentro de las clases, esto permite que algunas variables no sean accesibles desde el entorno de instancia de una clase y sólo sea utilizada de manera interna. Se identifican con un #.

class VariablePrivada {
    #variablePrivada;

};
