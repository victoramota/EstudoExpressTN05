const express = require('express');
const app = express();

let usuarios = [
    {nome: 'Victor', sobrenome: 'Athayde'},
];

// http://locahost:3000/
app.get('/inicio', (request, response) => {
    return response.send('Olá mundo.');
});

app.get('/usuarios', (request, response) => {
    return response.json(usuarios);
});

app.listen(3000, () => {
    console.log('Servidor Rodando!');
});