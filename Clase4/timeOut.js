// console.log('inicio de tareas');
// console.log('haciendo tarea 1');
// console.log('haciendo tarea 2');
// console.log('fin de tareas');

// El setTimeOut es asincronico, se utiliza para establecer un temporizador que ejecute una tarea después de un determinado tiempo.
const temporizador = (callback) => {
    setTimeout(() => {
        callback();
    }, 5000);
};

const operacion = () => console.log('Realizando operación');

// El console.log() es una operación es sincronico
console.log('inicio de tareas');

temporizador(operacion);

console.log('fin de tareas');