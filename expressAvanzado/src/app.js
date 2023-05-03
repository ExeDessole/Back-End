import express from 'express';
import productsRouter from './routes/productsRouter.js';
import cartsRouter from './routes/cartsRouter.js';

// Instancio el modulo express
const app = express();
// Puerto
app.listen(8080, () => console.log('Listening on port 8080'));
// Configuraciones para soportar archivos json, datos por url y archivos estaticos
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Midd a nivel app
app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();    
});
// Soporte ruta absoluta
// app.use(express.static(`${__dirname}/public`));
// Rutas hacia los métodos de usuarios y productos
app.use('/api/products/', productsRouter);
app.use('/api/carts/', cartsRouter);

// Midd de manejo de errores
app. use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Error no controlado');   
});