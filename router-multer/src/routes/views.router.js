import { Router } from "express";
import ProductManager from "../managers/productManager.js";


const products = new ProductManager();

const router = Router();


router.get('/', async (req, res) =>{
    try {
      const user = { name: 'Exe', role: 'user' };
      const productsList = await products.getProduct();
    
    console.log(data);
    return res.status(200).render('main', {productsList});
      
    } catch (error) {
      res.status(401).send('download failed - view');
    }
     
});

export default router;