const usuarios = [
    {nome: 'Victor', sobrenome: 'Athayde'},
    {nome: 'Victor', sobrenome: 'Oliveira'},
    {nome: 'Victor', sobrenome: 'Maya'},
    {nome: 'Juarez', sobrenome: 'Athayde'}
];

const resultados = usuarios.filter( usuario => usuario.nome == "Victor");

resultados.forEach( usuario => usuario.nome = "Pênis");

console.log(usuarios);
console.log('<-------------------------->')
console.log(resultados);