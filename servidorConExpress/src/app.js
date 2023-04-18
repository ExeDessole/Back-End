import express from 'express';
import ProductManager from './ProductManager';

// Instancio el modulo express
const app = express();
// Instancio la ruta
const path = './products.json'
// Instancio la clase
const dataBase = new ProductManager(path);
//? Esto no lo entendí muy bien.
app.use(express.urlencoded({extended: true}));
//Hago el llamado asincronico, primer parametro es la ruta
// Dentro del Callback como segundo parametro, llamo al metodo get de mi dataBase y envío la respuesta
app.get(path, async (req, res) => {
    const products = await dataBase.getProduct();
    res.send({products});
});

app.listen(8081, () => console.log('Listening on port 8081'));