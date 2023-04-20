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
app.get('/products', async (req, res) => {
    const products = await dataBase.getProduct();
    res.send({products});
    console.log(products);
    
});

app.get('/products/:id/', async (req, res) => {
    const productId = Number(req.params.id);
    const products = await dataBase.getProduct();
    const product = products.find(u => u.id === productId);
    if (!product) return res.send({error: 'Producto no encontrado'})
    res.send(product);
    console.log(product);
});


app.listen(8080, () => console.log('Listening on port 8080'));