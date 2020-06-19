import {Request, Response} from 'express';

import Movie from '../models/Movie';

export async function getMovies(req: Request, res: Response): Promise<Response> {
    const movies = await Movie.find();
    return res.json(movies);
}


export async function createMovie(req: Request, res: Response): Promise<Response> {

    const { title, category } = req.body;
    console.log(req.file);
    const newMovie = {
        title: title,
        category: category,
        imagePath: req.file.path
    };
    const movie = new Movie(newMovie);
    await movie.save();

    return res.json({
        message: 'Movie succesfully saved',
        movie
    });
}


