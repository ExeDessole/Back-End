import express from 'express';
import ProductManager from './ProductManager.js';

// Instancio el modulo express
const app = express();

// Instancio la clase con la ruta de parametro
const dataBase = new ProductManager('./products.json');
//Método para tráfico de datos por url.
app.use(express.urlencoded({extended: true}));
// Instancio la ruta y dentro de la call llamo al metodo getProduct de mi ProductManager
// y lo envío al servidor
app.get('./products/', async (req, res) => {
    const products = await dataBase.getProduct();
    res.send({products});
    console.log(products);
    
});

app.get('./products/:id/', (req, res) => {
    const productId = Number(req.params.id);
    const product = products.find(u => u.id === productId);
    res.send(product);
});


app.get('/usuarios-busqueda/', (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.query;
    res.send({ title, description, price, thumbnail, code, stock });
});

app.listen(8081, () => console.log('Listening on port 8081'));