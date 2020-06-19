import express from 'express';
import morgan from 'morgan'; // recibo mensajes de las peticiones
import path from 'path'; //

const app = express();

import indexRoutes from './routes/index';

// settings
app.set('port', process.env.PORT || 3000);
app.use(express.json());

// mostrar mensajes por consola según peticiones al servidor
app.use(morgan('dev'));

// routes
app.use('/api', indexRoutes);

// para almacenar los archivos publicos
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
