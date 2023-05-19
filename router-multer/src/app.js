import express from 'express';
import handlebars from 'express-handlebars'
import { Server } from 'socket.io';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import viewsRouter from './routes/views.router.js'
import { __dirname } from './utils.js';

// Express config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();    
})
// Handlebars config
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');
// File statics
app.use (express.static(`${__dirname}/public`));
// Routes
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/', viewsRouter);
// ERROR
app.use((err, req, res, next) =>{
    console.log(err);
    res.status(500).send('Error no controlado');    
});
// Server
const server = app.listen(8080, () => console.log('Server runnin on port 8080'));
// Socket
const io = new Server(server);

app.set('socketio', io);
