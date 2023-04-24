import express from 'express';
// import ProductManager from './ProductManager.js';
import usersRouter from './routes/usersRouter.js';
import productsRouter from './routes/productsRouter.js';
import { __dirname } from './utils.js';

// Instancio el modulo express
const app = express();

// Configuraciones para soportar archivos json, url y archivos estaticos
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Midd a nivel app
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();    
});

app.use(express.static(`${__dirname}/public`));
// Rutas hacia los métodos de usuarios y productos
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

// Midd de manejo de errores
app. use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Error no controlado');   
});

// Instancio la clase con la ruta de parametro
// const dataBase = new ProductManager('./products.json');

// Instancio la ruta y dentro de la call llamo al metodo getProduct de mi ProductManager
// y lo envío al servidor
// app.get('/products', async (req, res) => {
//     const products = await dataBase.getProduct();
//     res.send({products});
//     console.log(products);
    
// });

// app.get('/products/:id/', async (req, res) => {
//     const productId = Number(req.params.id);
//     const product = await dataBase.getProductByld(productId)
//     if (!product) return res.send({error: 'Producto no encontrado'})
//     res.send(product);
//     console.log(product);
// });


app.listen(8080, () => console.log('Listening on port 8080'));