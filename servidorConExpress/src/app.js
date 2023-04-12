import express from 'express';
import ProductManager from './ProductManager';

const app = express();
const path = './products.json';
const dataBase = new ProductManager(path);

app.get(path, async (req, res) => {
    const products = await dataBase.getProduct();
    res.send({products});
});

app.listen(8080, () => console.log('Listening on port 8080'));