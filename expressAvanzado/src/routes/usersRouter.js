import {Router} from 'express';

const router = Router();
const users = [];

router.get('/', (req, res) => {
    res.send({users})
});

router.post('/', (req, res) => {
    // {
    //     name: 'Exe',
    //     lastname: 'Dessole'
    // }
    const user = req.body;
    users.push(user);
    res.send({ status: 'succes', user})
});

export default router;