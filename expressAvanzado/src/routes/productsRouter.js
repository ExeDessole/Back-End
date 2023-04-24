import {Router} from 'express';
import {uploader} from '../utils.js'

const router = Router();
const products = [];

router.get('/', (req, res) => {
    res.send({products})
});

router.post('/', (req, res) => {
    // {
    //     name: 'Exe',
    //     price, thumbnail...etc
    // }
    const product = req.body;
    users.push(product);
    res.send({ status: 'succes', product})
});

router.post('/img', uploader.single('file'), (req,res) => {
    const filename = req.file.filename;
    const product = req.body;
    product.image = `http://localhost:8080/img/${filename}`;
    products.push(product);
    res.send({status: 'success'})
})

export default router;