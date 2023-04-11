const fs = require('fs');
const path = './ejPromises.txt'

const operacionesArchivosAsincrona = async () => {
  try {
    await fs.promises.writeFile(path, 'Hola mundo desde promesas');
    let contenido = await fs.promises.readFile(path, 'utf-8');
    console.log(contenido);
    
    await fs.promises.appendFile(path, '\n Más promesas');
    contenido = await fs.promises.readFile(path, 'utf-8');
    console.log(contenido);

    // await fs.promises.unlink(path);
  } catch (error) {
    console.log(error);
    
  } 
}

operacionesArchivosAsincrona();