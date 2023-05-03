import { Router } from 'express';
import { uploader } from '../utils.js';

const router = Router();
const users = [];

router.get('/', (req, res) => {
    res.send({users});
});
    
router.post('/', (req, res) => {
  const user = req.body;
  users.push(user);
  res.send({ status: 'succes', user});
});

router.post('/img', uploader.single('file'), (req, res) => {
  const filename = req.file.filename;
  const userIMG = req.body;
  userIMG.image = `htpp://localhost:8080/img/${filename}`;
  users.push(userIMG);
  res.send({ status: 'succes'});
})

export default router;