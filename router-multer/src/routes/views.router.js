import { Router } from "express";

const router = Router();
const products = [];

router.get('/', (req, res) =>{
    const user = {
        name: 'Exe',
        role: 'user'
    };
    res.render('index', {user, products});
    console.log(user, products);
    
});
router.get('/new-entry', (req, res) =>{
    res.render('../views/layouts/new-entry.handlebars');
});
router.post('/new-entry', (req, res) =>{
    const { title, description,	price, thumbnail, code,	stock } = req.body;
    let newProduct= { title, description, price, thumbnail, code, stock }
    products.push(newProduct)
    res.render('index', products);
});
export default router;