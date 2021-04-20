const express = require('express');
const app = express();

//indica para o express que usaremos os dados em JSON
app.use(express.json());

let usuarios = [
    {nome: 'Victor', sobrenome: 'Athayde'},
];

// http://localhost:3000/inicio/
app.get('/inicio', (request, response) => {
    return response.send('Olá mundo.');
});

// http://localhost:3000/usuarios/
app.get('/usuarios', (request, response) => {
    return response.json(usuarios);
});

// http://localhost:3000/usuarios/
app.post('/usuarios', (request, response) => {
   const { nome, sobrenome } = request.body;
   const novoUsuario = usuarios.push({nome, sobrenome});
   return response.json({nome, sobrenome });
});

// http://localhost:3000/usuarios/usuario
app.put("/usuarios/:nome", (request, response) => {
    const { nome } = request.params;
    const { sobrenome } = request.body;

    usuarios.filter( usuario => usuario.nome == nome).forEach( usuario => usuario.sobrenome = sobrenome);

    return response.json(usuarios);
});

// http://localhost:3000/usuarios/usuario
app.delete("/usuarios/:nome", (request, response) => {
    const { nome } = request.params;
    const { sobrenome } = request.body;
    
    usuarios = usuarios.filter( usuario => !(usuario.nome == nome && usuario.sobrenome == sobrenome))
    
    return response.json(usuarios);
});

// Liga o servidor para ficar em modo listen as alterações
app.listen(3000, () => {
    console.log('Servidor Rodando!');
});