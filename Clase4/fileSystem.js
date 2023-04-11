const fs = require('fs');

const path = './ejemplo.txt';

fs.writeFileSync(path, 'Hola coder estoy trabajando en un archivo');

if(fs.existsSync(path)) {
    let contenido = fs.readFileSync(path, 'utf-8');
    console.log(contenido);
    
    fs.appendFileSync(path, '\nMás contenido');

    contenido = fs.readFileSync(path, 'utf-8');
    console.log(contenido);

    // fs.unlinkSync(path); 
};