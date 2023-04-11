// Dinamic import: se esporta un archivo al código cuando sea necesario.
// Se puede importar en las primeras líneas de código pero no es lo conveniente ya que de esa manera estaría afectando al código innecesariamente.


// El método trim() elimina los espacios en blanco de ambos extremos de una cadena y devuelve una nueva cadena, sin modificar la cadena original.

const cadena1 = `        hola`;

const cadena2 = cadena1.trim();

console.log(cadena1.length);
console.log(cadena2);
console.log(cadena2.length);

const arregloAnidado = ["1", 2, 3, 4, [5, 6, 7], [8, 9, 10, [11, 12, 13]]];

// Método flat() quita los anidados de primer nivel, puede recibir como parametro el número de anidamientos que se desea quitar.
console.log(arregloAnidado.flat(2));