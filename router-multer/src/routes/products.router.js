import { Router } from 'express';
import ProductManager from '../managers/productManager.js';
import { uploader } from '../utils.js';

const router = Router();
const products = new ProductManager('../files/products.json');

router.get('/', async (req, res) => {
  await products.getProduct();
  res.send({ status: 'succes', products});
});
    
router.post('/', (req, res) => {
  const product = req.body;
  products.push(product);
  res.send({ status: 'succes', product});
});

router.post('/img', uploader.single('file'), (req, res) => {
  const filename = req.file.filename;
  const userIMG = req.body;
  userIMG.image = `htpp://localhost:8080/img/${filename}`;
  users.push(userIMG);
  res.send({ status: 'succes'});
})

export default router;