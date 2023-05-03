import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import { __dirname } from './utils.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();    
})
app.use (express.static(`${__dirname}/public`));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.use((err, req, res, next) =>{
    console.log(err);
    res.status(500).send('Error no controlado');    
});

app.listen(8080, () => console.log('Server runnin on port 8080'));
