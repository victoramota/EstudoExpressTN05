const { json } = require('express');
const express = require('express');
const app = express();
app.use(express.json()); //indica para o express que usaremos os dados em JSON

/*
Body: Formulário Post
Params: Parâmetro vindos na rota da URL
Query String: Tudo o que vem depois da ?
Header: Cabeçalho da Requisição
*/

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
app.get('/usuarios/:id', (request, response) => {
    const { id } = request.params;
    
    const usuarioIndex = usuarios.findIndex(usuario => usuario.id == id);

    if ( usuarioIndex < 0){
        return response.status(400).json ({ error: 'Usuário não encontrado' })
    };

    return response.json ({usuario: usuarios[usuarioIndex]});
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
});

// http://localhost:3000/usuarios/usuario
app.delete("/usuarios/:nome", (request, response) => {
    const { nome } = request.params;
    const { sobrenome } = request.body;
    
    usuarios = usuarios.filter( usuario => !(usuario.nome == nome && usuario.sobrenome == sobrenome))
});

// http://localhost:3000/usuarios/id
app.put("/usuarios/:id", (request, response) => {
    const { id } = request.params;
    const { nome, sobrenome } = request.body;
    
    const usuarioIndex = usuarios.findIndex(usuario => usuario.id == id);

    if ( usuarioIndex < 0){
        return response.status(400).json ({ error: 'Usuário não encontrado' })
    };

    const alteracaoDeNome = {
        id,
        nome,
        sobrenome
    }

    usuarios[usuarioIndex] = alteracaoDeNome;

    return resposta.json(alteracaoDeNome);
});

/* Metodo Delete com ID
app.delete("/usuarios/:id", (request, response) => {
    const { id } = request.params;
    
    const usuarioIndex = usuarios.findIndex(usuario => usuario.id == id);

    if ( usuarioIndex < 0){
        return response.status(400).json ({ error: 'Usuário não encontrado' })
    };

    usuarios.splice(usuarioIndex, 1)
    
    return response.status(204).send();
});
*/

// Liga o servidor para ficar em modo listen as alterações
app.listen(3000, () => {
    console.log('Servidor Rodando!');
});