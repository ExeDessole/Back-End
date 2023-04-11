// Las "Const" no son reasignables, sin embargo el valor de un objeto coomo un Array puede modificarse, es decir que lo que muta es el valor interno del objeto y no el objeto en si.

let variable1 = 'variable';
const variable2 = 'variable';
const array1 = [1,2,3];

variable1 = 'var actualizada';

console.log(variable1);
console.log(variable2);
console.log(array1);

array1.push(4,5);

console.log(array1);

// Funciones: bloque de instrucciones que trabajan con un scope local.

function sumar (parametro1, parametro2) {
  return parametro1 + parametro2;
}

const resultadoSuma = sumar(2,4);
console.log(resultadoSuma);

// Funcion flecha: sugarsintax de una funcion, no es necesario usar la palabra reservada "Function", solo se le da el nombre de la funcion.

const funcionFlechaSumar = (parametro1,parametro2) => {
  return parametro1 + parametro2;
};

console.log(funcionFlechaSumar(4,4));

// Se puede mejorar el codigo cuando tenemos SOLO una sola instrucción dentro de la función con un "return" implicito

const funcionFlechaSumar2 = (parametro1,parametro2) => parametro1 + parametro2;

console.log(funcionFlechaSumar2(10,10));

// Uso de template string ES6

const saludo = 'Hola';
const nombre = 'soy Exe';

const template = `${saludo} ${nombre}`;
console.log(template);

// Uso de funciones => Ejercicio 1: 
// 1- Definir la funcion mostrarLista que reciba como parametro un arreglo.
// 2- Si la lista esta vacía devolver "Lista vacía".
// 3- Si la lista tienen elementos mostrarlos uno a uno. Finalizar devolviendo la longitud de la lista usanto template string.

function mostrarLista (array) {
  if (array.length === 0) {
    console.log('Lista vacía');
    return;    
  }
  for (i=0; i < array.length; i++){
    console.log(array[i]);
  }
  console.log(`Longitud de lista: ${array.length}`);  
}
mostrarLista([1,2,3]);

// Clases, dentro puedo tener el constructor, variables y métodos.

class persona{
  // El constructor será quien de los atributos a la clase, esos atributos los recibe por parametros
  // y son referenciados dentro del bloque con la palabra reservada this.
  // Dentro de la clase podemos tener varios constructores, este concepto es definido como sobre carga de constructores (varios parametros).
  constructor(nombre){
    this.nombre = nombre;
  }
  // Se pueden definir variables estaticas (como si fuera un const), como atributo en comun, ademas de los atributos modeladores del constructor.
  static especie = 'Soy humano';
  // Tambien podemos agregar métodos como funciones flechas y acceder a los atributos modeladores con la palabra reservada this, ej: this.nombre.

  saludar = () =>{
    console.log(`Hola soy ${this.nombre}`); 
  } 
  // Tambien en los métodos se puede acceder a las variables estaticas con el nombre de la clase.nombre de la variable ej: persona.especie

  obtenerEspecie = () => {
    console.log(`Soy ${persona.especie}`);
  }
}

// Para comenzar a crear las "personas" e instanciarlas se utiliza la palabra reservada new y el nombre de la clase con el o los parametros
// asignados en el constructor, y se asigna a una variable const.

const persona1 = new persona('Exe');
const persona2 = new persona('Eli');
const persona3 = new persona('Emi');

// una vez creadas las instancias, es decir las diferentes personas podemos llamar a los métodos creados dentro de la clase.

persona1.saludar();
persona1.obtenerEspecie();

persona2.saludar();
persona2.obtenerEspecie();

persona3.saludar();
persona3.obtenerEspecie();

