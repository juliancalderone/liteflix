import {Schema, model, Document} from 'mongoose';

// especifico que quiero guardar dentro de cada pelicula
const schema = new Schema({
    title: String,
    category: String,
    imagePath: String
});

interface IMovie extends Document {
    title: string;
    category: string;
    imagePath: string;
}

// coleccion de movies dentro de la bd
export default model<IMovie>('Movie', schema);
