import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from 'express';
import hbs from 'hbs';

const app = express();


//Servir contenido dinamico:
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));
app.listen(process.env.PORT);

//Aca renderizo con handlebars
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Ruben Almada',
        titulo: 'Curso Node'
    }); //no hace falta extencion de la vista (.hbs)
})

/*Truco para ocultar .html
01-usar res.sendFile
02-En los links en las paginas en lugar de apuntal al html, aputar a la url capturada por el res.sendFile
*/
app.get('/generic', (req, res) => {
    //Aca mando Texto
    //res.send('404 | Pagina no encontrada'); 

    //Aca redirecciono a pagina    
    //res.sendFile(__dirname  + '/public/generic.html'); 

    //Aca contenido dinamico con hbs
    res.render('generic', {
        nombre: 'Ruben Almada',
        titulo: 'Curso Node'
    });     
})

app.get('/elements', (req, res) => {
    //Aca redirecciono a pagina    
    //res.sendFile(__dirname  + '/public/elements.html');

    //Aca contenido dinamico con hbs
    res.render('elements', {
        nombre: 'Ruben Almada',
        titulo: 'Curso Node'
    });    
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