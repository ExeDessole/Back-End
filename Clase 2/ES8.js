const objeto1 = {
  impuesto1: 12,
  impuesto2: 42,
  impuesto3: 35
};

// El objeto se compone de propiedades o claves (keys) y valores de las propiedades o claves.
// Para obtener las propiedades se utiliza el método Object.keys() y recibe como parametro el objeto del cual queremos obtener estos valores. Retorna un array con las propiedades.

const soloAtributos = Object.keys(objeto1);
console.log(soloAtributos);

//  El objeto se compone de propiedades o claves (keys) y valores de las propiedades o claves.
// Para obtener los valores de las propiedades se utiliza el método Object.values() y recibe como parametro el objeto del cual queremos obtener estos valores. Retorna un array con el valor de las propiedades.

const soloValores = Object.values(objeto1);
console.log(soloValores);

//  El objeto se compone de propiedades o claves (keys) y valores de las propiedades o claves.
// Para obtener las propiedades con sus valores, es decir las entradas del objeto se utiliza el método Object.entries() y recibe como parámetro el objeto del cual queremos adquirir estos valores. Retorna arrays con lo solicitado.

const entradas = Object.entries(objeto1);
console.log(entradas);

// Método reduce(): recibe cuatro parametros (valorInicial, valorAcumulado, indice y array). Recibe una función como parametro.
// En el siguiente ejemplo tomamos "solo valores" y sumamos cada valor de cada objeto. Si es necesario se piede inicializar agregando una variable o poniendo , luego de la funcion como segundo parametro y un valor de inicio.

const impuestosTotales = soloValores.reduce((valorInicial, valorAcumulado) => valorInicial + valorAcumulado);
console.log(impuestosTotales);

const max = soloValores.reduce((valorInicial, valorAcumulado) =>{
  return Math.max(valorInicial, valorAcumulado);
}, 0);
console.log(max);


