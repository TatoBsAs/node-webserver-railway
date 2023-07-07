import http from 'http';

http.createServer((req /*request*/, res /*responde*/) => {

    res.write('Hola Mundooooo!!!');
    res.end();
})
.listen(8080);

console.log('Ecuchando puerto: ', 8080);
