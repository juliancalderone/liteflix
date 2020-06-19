import app from './app';
import {startConnection} from './database';

async function main() {
    // ejecuto la conexión
    startConnection();
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();


