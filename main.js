//REST

const usuario = {
    nome: 'Iury',
    idade: 22,
    empresa: 'Raro'
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b,...params) {
    return a + b + params.reduce((total, next) => total + next);
}

console.log(soma(1,2,3,4));

//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);

const pessoa1 = {
    nome: 'Iury',
    idade: 22,
    empresa: 'Raro'
}

const pessoa2 = { ...pessoa1, nome: 'José' };
console.log(pessoa2);