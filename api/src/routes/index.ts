import {Router} from 'express';
const router = Router();

import {createMovie, getMovies} from '../controllers/movie.controller';

import multer from '../libs/multer';

router.route('/movies')
    .post(multer.single('image'), createMovie)
    .get(getMovies);


export default router;
