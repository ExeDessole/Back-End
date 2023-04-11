// Operador Exponencial: se incluye en ES7 para independizarse de la libreria Math (libreria para calculos matematicos).
const valoresBase = [1,2,3,4,5,6];

// Método map: crea un nuevo array con los resultados de la función asignada (en este caso el operador exponencial) en cada uno de sus elementos, es decir que recorre cada elemento. Recibe tres parametros elemento, indice y array.

const nuevosValores = valoresBase.map((numero, indice) => numero**indice);

console.log(nuevosValores);

// Método Includes: sirve para validar si existe un elementod dentro de un array, retorna "True" o "False"

const nombres = ['Exequiel', 'Emilia', 'Eliana'];

if (nombres.includes('Exequirr')){
  console.log('El nombre existe');
}else{
  console.log('El nombre no existe');
};

