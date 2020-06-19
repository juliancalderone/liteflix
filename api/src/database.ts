import { connect } from 'mongoose';

export async function startConnection() {
    await connect('mongodb://localhost/movies-db', {
        useNewUrlParser: true
    });
    console.log('database is connected');
}
