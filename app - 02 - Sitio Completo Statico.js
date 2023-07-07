import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from 'express';
const app = express();

/*
app.get('/', (req, res) => {
    res.send('Home Page');
})


*/

//Servir contenido estatico:
app.use(express.static('public'))
app.listen(8080);

/*Truco para ocultar .html
01-usar res.sendFile
02-En los links en las paginas en lugar de apuntal al html, aputar a la url capturada por el res.sendFile
*/
app.get('/generic', (req, res) => {
    //res.send('404 | Pagina no encontrada');
    res.sendFile(__dirname  + '/public/generic.html');
})

app.get('/elements', (req, res) => {
    //res.send('404 | Pagina no encontrada');
    res.sendFile(__dirname  + '/public/elements.html');
})

//Si en public, no hay hola-mundo llega a este punto
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo!!!!!');
})

//Si no se atendio ningura url antes llega a este punto
app.get('*', (req, res) => {
    //res.send('404 | Pagina no encontrada');
    res.sendFile(__dirname  + '/public/404.html');
})