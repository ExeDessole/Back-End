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
    if( !user.name || !user.lastname || !user.user){
        return res.status(400).send({ status: 'error', error: 'Datos incompletos'});
    }
    users.push(user);
    res.send({ status: 'succes', user})
});

export default router;