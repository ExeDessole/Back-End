const fs = require('fs');

const path = '../Clase4/ejCallbacks.txt';

fs.writeFile(path, 'Hola mundo estoy trabajando con CallBacks',
  error => {
    if(error) {
      throw new Error(`Error en la creación del archivo: ${error}`)
    }

    fs.readFile(path, 'utf-8',(error, contenido) => {
      if(error) {
        throw new Error(`Error en la lectura del archivo: ${error}`)
      }
      console.log(contenido);

    fs.appendFile(path, '\n Más contenido', (error, contenido) => {
      if(error) {
        throw new Error(`Error en la actualización del archivo: ${error}`)
      }
      console.log(contenido);

      fs.readFile(path, 'utf-8',(error, contenido) => {
        if(error) {
          throw new Error(`Error en la lectura del archivo: ${error}`)
        }
        console.log(contenido)

        // fs.unlink(path, error => {
        //   if(error) {
        //     throw new Error(`Error en la eliminación del archivo: ${error}`)
        //   }
      });
    });
  });
});

// CallBacks Hells, esta implementación no es la más óptima.(mala práctica)