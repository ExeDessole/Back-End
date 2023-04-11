// Para crear copias de nuevos objetos se utiliza spread operator "...", tambien se pueden fucionar dos o más objetos.

// Si los objetos tienen propiedades iguales estas se sobreescriben, por eso es importante chequear este punto.

const objeto1 = {
  propiedad1 : 2,
  propiedad2 : 'b',
  propiedad3 : true
};

const objeto2 = {
  propiedad1: 'c',
  propiedad2: [1,2,3,4]
};

const resultante1 = {
  ...objeto1, ...objeto2
};
console.log(resultante1);

// Si cambiamos el nombre de las propiedades para que no sean iguales el problema se soluciona.

const objeto3 = {
  propiedad1 : 2,
  propiedad2 : 'b',
  propiedad3 : true
};

const objeto4 = {
  propiedad4: 'c',
  propiedad5: [1,2,3,4]
};

const resultante2 = {
  ...objeto3, ...objeto4
};
console.log(resultante2);

// Concepto de destructuring: se utiliza para romper elementos y extraer propiedades.

const objeto5 = {
  propiedad1 : 2,
  propiedad2 : 'b',
  propiedad3 : true
};

const {propiedad1, ...rest} = objeto5;
console.log(rest);
console.log(propiedad1);


