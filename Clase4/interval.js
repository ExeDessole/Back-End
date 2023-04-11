// setInterval funciona como setTimeout, la diferencia radica en que éste reiniciará el conteo y ejecutará la tarea nuevamente cada vez que se cumpla dicho intervalo de tiempo.

const contador = () => {
    let contador = 1;

    const timer = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador > 5) {
            clearInterval(timer);
        }
    }, 1000)
}

// clearInterval() se utiliza para cortar la ejecución como si fuera un Break.
console.log('inicio de tareas');
contador();
console.log('fin de tareas');
