// import {Router} from 'express';
import ProductManager from './managers/ProductManager.js';

// Instancia Router y la clase.
// const router = Router();


const dataBaseOfProducts = new ProductManager('./files/products.json');

const env = async () => {
  const objs = await dataBaseOfProducts.getProduct();

  console.log(objs);

  const product = {
      title: 'Prueba4',
      description: 'Prueba4',
      price: 400,
      thumbnail: 'Sin Img4',
      code: 'asd123',
      stock: 4
    };
    
    await dataBaseOfProducts.addProduct(product);
    
    const obtsResult = await dataBaseOfProducts.getProduct();
    console.log(obtsResult);
    
  };

env();
// // GET con lista de productos, llamado al método getProduct de la clase.
// router.get('/', async (req, res) => {
//   const products = await dataBase.getProduct();
//   res.send({products});
  
// });

// // GET con retorno por id. req params, llamado al método getProductByld de la clase.
// // Manejo de error y envío del producto
// router.get('/products/:id/', async (req, res) => {
//   const productId = Number(req.params.id);
//   const product = await dataBase.getProductByld(productId);

//   if (!product) return res.send({error: 'Producto no encontrado'})
//   res.send(product);
//   console.log(product);
// });

// // POST envío de nuevo producto. Status default, campos obligatorios.
// // Manejo de error, llamado al método addProduct de la clase y envío de producto.
// router.post('/', async (req, res) => {
//   const product = req.body;

//   if (!product.status) {
//     product.status = true;
//   }

//   if( !product.title || !product.description || !product.code ||
//       !product.price || !product.stock) {
//       return res.status(400).send({ status: 'error', error: 'Valores incompletos'});
//       };

//   await dataBase.addProduct(product);
//   res.send({ status: 'succes', product});
// });

// // PUT cambio de precio, campo obligatorio,
// // llamado al método updateProduct de la clase y envío de producto.
// router.put('/products/:id/', async (req, res) => {
//   const productId = Number(req.params.id);
//   const newPrice = req.body;

//   if (!product.price) {
//       return res.status(400).send({ status: 'error', error: 'Ingrese nuevo precio'});
//     }else{
//       res.send({status: 'succes', message: 'El precio se actualizó'})
//     }
  
//   await dataBase.updateProduct(productId,newPrice);
//   res.send({ status: 'succes', product});
// })

// // DELETE borrar producto mediante id.
// router.delete('/products/:id/', async (req, res) => {
//   const productId = Number(req.params.id);
//   const checkProduct = products.findIndex(product => product.id === productId);
    
//     if (checkProduct === -1){
//       return res.status(400).send({ status: 'error', error: 'El producto no exixte'});
//     }
//   await dataBase.deleteProduct(productId);
//   res.send({status: 'succes', message: 'El producto ha sido eliminado'})
// }) 

// export default router;