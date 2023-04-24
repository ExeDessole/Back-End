import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';

// Configuración de path absoluto
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, `${__dirname}/public/img`)
    },
    filename: (req, res, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const uploader = multer({
    storage, onError: (err, next) =>{
        console.log(err);
        next();        
    }
})

export { __dirname, uploader };