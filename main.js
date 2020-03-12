const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map( ( { idade } = usuario ) => idade);
console.log(idades);

const trabalhaNaRocket = usuarios.filter( ( { idade, empresa } = usuario ) => idade > 18 && empresa === 'Rocketseat');
console.log(trabalhaNaRocket);

const trabalhaNaGoogle = usuarios.find( ({ empresa } = usuario) => empresa === 'Google'); 
console.log(trabalhaNaGoogle);

const calculo = usuarios.map(usuario => ({ ...usuario, idade: usuario.idade * 2})).filter(usuario => usuario.idade <= 50);

console.log(calculo);