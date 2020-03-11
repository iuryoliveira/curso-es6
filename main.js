const usuario = {
    nome: 'Iury',
    idade: 22,
    endereco: {
        cidade: 'Santa Luzia',
        estado: 'MG'
    },
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
    console.log(nome);
    console.log(idade);
}

mostraNome(usuario);