import multer from 'multer';
// @ts-ignore
import uuid from 'uuid/v4';
import path from 'path';


// indico donde quiero que se guarden las imagenes
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuid() +  path.extname(file.originalname) );
    }
});

export default multer({storage});
