const express = require('express');
const app = express();

//indica para o express que usaremos os dados em JSON
app.use(express.json());

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

app.post('/usuarios', (request, response) => {
   const { nome, sobrenome } = request.body;

   const novoUsuario = usuarios.push({nome, sobrenome});

   return response.json({nome, sobrenome});
});

app.put("/usuarios/:nome", (request, response) => {
    const { nome } = request.params;

    //Procurar qual tem nome igual e substituir o sobrenome

    const { sobrenome } = request.body;
});

app.listen(3000, () => {
    console.log('Servidor Rodando!');
});