import { Router } from 'express';
import ProductManager from '../managers/productManager.js';
// import { uploader } from '../utils.js';
import { __dirname } from '../utils.js';

const router = Router();
const path = `${__dirname}/files/products.json`
const products = new ProductManager(path);

router.get('/', async (req, res) =>{
try {
  const limit = req.query.limit;
  const user = { name: 'Exe', role: 'user' };
  const productsList = await products.getProduct();

  if(!limit){  
    console.log(productsList);
    return res.status(200).render('main', {user, productsList});
  }
  return res.status(200).render('main', { user, products: productsList.slice(0, limit) });
} catch (error) {
  res.status(401).send('download failed - products');
}
 
});

router.post('/', async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await products.addProduct(product);
    res.send({ status: 'succes', newProduct});
  } catch (error) {
    res.status(401).send('product not created');
  }

router.get('/new-entry', (req, res) =>{
  return res.render('new-entry');
});

router.post('/new-entry', async (req, res) =>{
  const { title, description,	price, thumbnail, code,	stock } = req.body;
  
  if (!title || !description || !price || !thumbnail || !code || !stock) {
      
      return res.render('error', { message: 'Por favor complete todos los campos' });
  }
    
  const data = await products.addProduct({ title, description, price, thumbnail, code, stock });
    
  return res.render('main', data);
});  
});




// router.post('/img', uploader.single('file'), (req, res) => {
//   const filename = req.file.filename;
//   const userIMG = req.body;
//   userIMG.image = `htpp://localhost:8080/img/${filename}`;
//   users.push(userIMG);
//   res.send({ status: 'succes'});
// })

export default router;