alert('Funcionando');

let pessoa = {
    nome: 'Iury',
    idade: 22
}

pessoa.show = false;
console.log(pessoa.show ?? true);

let user = {};
user.address = {street: 'londrina'};
let street = user?.address?.street;
console.log(street);